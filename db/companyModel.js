const mongoose = require('mongoose');


const companySchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    number_of_employee:{
        type:Number,
        default:0
    },
    employees:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Employee"
        }
    ],
    company_created_date:{
        type:Date,
        default:Date.now

    }
})


const companyModel = mongoose.model("Companie", companySchema);

module.exports = companyModel;