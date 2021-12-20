const employeeRoute = require('express').Router();


const employeeModel = require('../db/employeeModel');

const companyModel = require("../db/companyModel");


employeeRoute.post("/create", async(req, res)=>{

   
    try {
        const isEmployeeAlreadyExists = await employeeModel.findOne({$and:[{"name": req.body.name}, {"date_of_birth": req.body.date_of_birth}]});
        if(isEmployeeAlreadyExists) return res.status(409).json({"message": "Employee Already exists"});
    
    

        const employee = employeeModel({
            name:req.body.name,
            date_of_birth:req.body.date_of_birth
        })

        await employee.save();
        res.send(employee);
        
    } catch (error) {

        console.log(error);
        
    }

})


// get all employee
employeeRoute.get("/all", async(req, res)=>{

    try {
        const all_employee = await employeeModel.find();
        res.send(all_employee);
        
    } catch (error) {
        console.log(error)
        
    }
})



// get employee by id
employeeRoute.get("/get/:id", async(req, res)=>{

   

    try {
        const emp_id = req.params.id;

        const employee = await employeeModel.findById(emp_id);
        res.send(employee);
        
    } catch (error) {
        console.log(error)
        
    }

})



employeeRoute.delete("/:id", async(req, res)=>{

    try {
        const emp_id = req.params.id;

        const employee = await employeeModel.findByIdAndDelete({"_id":emp_id});
        res.send(employee);
        
    } catch (error) {
        console.log(error)
        
    }

})




// join company by name
employeeRoute.put("/join", async(req, res)=>{

    try {

        const company_name = req.body.company_name;
        const employee_name = req.body.employee_name;
        const date_of_birth = req.body.date_of_birth;
        
        // checking company name
        const company = await companyModel.findOne({"name": company_name}).populate('Employee');
        if (!company) return res.status(404).json({"message": "No such company exists"});

        // const isEmployeeAlreadyExists = await employeeModel.findOne({$and:[{"name": req.body.name}, {"date_of_birth": req.body.date_of_birth}]});
        // if(isEmployeeAlreadyExists) return res.status(409).json({"message": "Employee Already exists"});



        const employee = await employeeModel.findOne({$and:[{"name": req.body.employee_name}, {"date_of_birth": req.body.date_of_birth}]});
        if (!employee) return res.status(404).json({"message": "No such employee exists"});
        
        const emp_id = employee._id;

        const list_of_employee = company.employees;

        const len_of_employee = list_of_employee.length;

        if( len_of_employee == 0){

            const ifEmployeExists = await companyModel.find({employees: { $elemMatch: { $eq: emp_id} }});
            console.log(ifEmployeExists)
            if(ifEmployeExists.length !=0) return res.status(409).json({"message": "Employee already exists"});


            await employeeModel.findByIdAndUpdate({"_id": emp_id}, {"company": company._id, "employe_join_company_date": Date.now()}, {new:true});
            const data_company = await companyModel.findByIdAndUpdate({"_id": company._id}, {$inc:{number_of_employee:1}}, {new:true})
            await data_company.employees.push(emp_id);
            await data_company.save();
            return res.send(data_company);


        }else{

            const ifEmployeExists = await companyModel.find({employees: { $elemMatch: { $eq: emp_id} }});
            console.log(ifEmployeExists)
            if(ifEmployeExists.length !=0) return res.status(409).json({"message": "Employee already exists"});

            const todays_date = new Date();
            await employeeModel.findByIdAndUpdate({"_id": emp_id}, {"company": company._id, "employee_join_company_date": todays_date}, {new:true});
            const data_company = await companyModel.findByIdAndUpdate({"_id": company._id}, {$inc:{number_of_employee:1}}, {new:true})
            await data_company.employees.push(emp_id);
            await data_company.save();
            return res.send(data_company);

        }

        
    } catch (error) {
        console.log(error);
        
    }

})





module.exports=employeeRoute;