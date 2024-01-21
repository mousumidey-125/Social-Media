const schema_mongoose=require('mongoose');
const PostSchema=schema_mongoose.Schema(
    {
        userName:{type: String},
        userEmail:{type:String},
        postMessage:{type:String},
        postId:{type:String},
        likes:{ type: Number, default: 0 }

    
    },
    {
        timestamps:true
    }
);
module.exports=schema_mongoose.model('posts',PostSchema);