const mongoose = require('mongoose');


mongoose.connect("mongodb+srv://shreyas:shreyas@cluster0.81mai.mongodb.net/mernwork?retryWrites=true&w=majority",{  useNewUrlParser: true,useUnifiedTopology: true }).then(()=>{
    console.log("connected successfully")
}).catch((err)=>{
    console.log(err)
})

