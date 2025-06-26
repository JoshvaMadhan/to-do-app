import mongoose from 'mongoose';

const schema= new mongoose.Schema({
    name:{type:String,require:true},
    password:{type:String,require:true},
    Email:{type:String,require:true}
});

const usermodel=mongoose.models.user||mongoose.model('user',schema);

export default usermodel;