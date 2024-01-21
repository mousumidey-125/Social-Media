const schema_mongoose=require('mongoose');
const PostSchema=schema_mongoose.Schema(
    {
        userName:{type: String},
        userEmail:{type:String},
        postMessage:{type:String}

    
    },
    {
        timestamps:true
    }
);
module.exports=schema_mongoose.model('post',PostSchema);