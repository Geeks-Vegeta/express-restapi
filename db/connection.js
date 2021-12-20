const mongoose = require('mongoose');


mongoose.connect("mongodb+srv://shreyas:shreyas@cluster0.81mai.mongodb.net/mernwork?retryWrites=true&w=majority",{ createIndexes:true, useNewUrlParser: true,useUnifiedTopology: true, useFindAndModify:false }).then(()=>{
    console.log("connected successfully")
}).catch((err)=>{
    console.log(err)
})

