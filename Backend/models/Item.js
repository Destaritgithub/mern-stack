const mongoose=require('mongoose');
const Schema=mongoose.Schema;
//create Schema
const ItemSchema= new Schema({
 name:{
  type:String,
  required:true
 }
})