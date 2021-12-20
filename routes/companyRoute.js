const companyRoute = require('express').Router();


const companyModel = require('../db/companyModel');



companyRoute.post("/create", async(req, res)=>{
    try {

        const nameAlreadyExists = await companyModel.findOne({"name": req.body.name});
        if (nameAlreadyExists) return res.status(409).json({"message": "this name already exists"});

        const company = companyModel({
            name:req.body.name
        })
        await company.save();
        res.send(company)
        
    } catch (error) {
        console.log(error)
        
    }
})


// get all company
companyRoute.get("/all", async(req, res)=>{

    try {

        const company = await companyModel.find().sort({number_of_employee: "desc"});
        res.send(company);
        
    } catch (error) {
        console.log(error);
        
    }
})


companyRoute.delete("/delete/:id", async(req, res)=>{
    const company_id = req.params.id;
    try {
        const company = await companyModel.findByIdAndDelete({"_id": company_id });
        res.send(company);
        
    } catch (error) {
        console.log(error)
        
    }
})


companyRoute.get("/allemployees/:name", async(req, res)=>{

    const name = req.params.name;
    try {
        const employees = await companyModel.findOne({"name": name}).populate('employees');
        if(!employees) return res.status(404).json({"message": "No such Company exists"});

        res.send(employees);
        
    } catch (error) {
        console.log(error)
        
    }
})


// search company
companyRoute.get("/search/:name", async(req, res)=>{
    const name = req.params.name;

    try {
        const company = await companyModel.find({'name': name});
        if(!company) return res.status(404).json({"message": "No such Company exists"});

        res.send(company);
        
    } catch (error) {
        console.log(error);
        
    }
})


module.exports=companyRoute;