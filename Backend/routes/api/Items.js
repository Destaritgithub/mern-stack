const express= require('express');
const router =express.Router();
//item model
const Item =require('../../models/Item');
//routes GET api/items
// GET all items
// public
router.get('/',(req,res)=>{
 Item.find()
 .sort({date:-1})
 .then(items =>res.json(items));
});

module.exports= router;
