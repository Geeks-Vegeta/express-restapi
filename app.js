const express = require('express');

app = express();

const dotenv = require('dotenv');

dotenv.config();

// middleware
app.use(express.json())

require("./db/connection");


// importing all routes
const companyRoute = require('./routes/companyRoute');
const employeeRoute = require('./routes/employeeRoute');



app.use("/company", companyRoute);
app.use("/employee", employeeRoute)



app.get("/",(req, res)=>{
    try {
        res.status(200).json({"message": "Hello world"});
        
    } catch (error) {
        console.log(error)
        
    }
})


const port = process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log(`listening at port ${port}`)
})