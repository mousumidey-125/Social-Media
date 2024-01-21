const schema_mongoose=require('mongoose');
const UserSchema=schema_mongoose.Schema(
    {
        userName:{type: String},
        userEmail:{type: String},
        userPhone:{type: String},
        userPassword:{type: String},
    },
    {
        timestamps:true
    }
);
module.exports=schema_mongoose.model('user_details_collection',UserSchema);