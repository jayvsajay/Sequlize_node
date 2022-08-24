const Customer=require('../models/customer')

const inserting = async(req,res)=>{
    try{
        const {id,name,email}=req.body;
        await Customer.create({id,name,email})
        res.send('successfully inserted')
      }
      catch(err){
        res.send(err)
      }
}

module.exports=inserting;