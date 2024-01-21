const mongoose =require('mongoose');
const url="mongodb://127.0.0.1:27017/socialMedia";

mongoose.connect(url)
.then((result)=>{
    console.log("NodeJs to mongodb connection established")
}).catch((err)=>{
    console.log("error in db connection: ",JSON.stringify(err,undefined,2))
    process.exit();
})

module.exports=mongoose;