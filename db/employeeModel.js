const mongoose = require('mongoose');


const employeeSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        lowercase:true
    },
    date_of_birth:{
        type:String,
        required:true,
        lowercase:true
    },
    company:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Companie"
    },
    employee_join_company_date:{
        type:String,

    }

})


const employeeModel = mongoose.model("Employee", employeeSchema);

module.exports = employeeModel;