const mongoose = require('mongoose');


mongoose.connect(process.env.DB_URI,{ createIndexes:true, useNewUrlParser: true,useUnifiedTopology: true, useFindAndModify:false }).then(()=>{
    console.log("connected successfully")
}).catch((err)=>{
    console.log(err)
})

