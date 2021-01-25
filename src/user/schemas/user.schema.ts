import * as mongoose from 'mongoose';

export const UserSchema=new mongoose.Schema({
    id:String,
    name:String,
    address:String,
    email:String     
})