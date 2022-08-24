const sequelize = require("./util/database");
const express=require('express')
const app=express()
const  PORT = 3001;
 
app.use(express.urlencoded({extended:false}));
const { Op } = require("sequelize");
const Customer = require("./models/customer");
const Order = require("./models/order");
const inserting = require("./controller/Crud");

Customer.hasMany(Order);
app.use(express.json())
let customerId = null;
sequelize.sync({alter: true})

app.get('/getdata',async(req,res)=>{
  try{
    // const result=await Customer.findAll({attributes:['id','name','email']})
    const result1=await Customer.findAndCountAll({where:{name:{[Op.like]:'sun%'}}})
    // res.json(result)
    res.json(result1)
  }
  catch(err){
    res.send(err)
  }
})
app.post('/postdata',inserting);
app.put('/update/:name',async(req,res)=>{
  try{
    let name=req.params.name;
    const r=await Customer.update({name:name},{
      where:{
        name:'suresh'
      }
    });
   
    res.send('updated')
  }
  catch(err){
    res.send(err)
  }
})
app.delete('/del/:id',async(req,res)=>{
  try{
    let id = req.params.id;
    const re = await Customer.destroy({where:{id:id}})
    res.send('dleted')
  }
  catch(err){
    res.send(err)
  }
})
  // .sync()
  // .then((result) => {
  //   return Customer.create({name: "Ajay", email: "cb@gmail.com"})
  // })
  // .then(customer=>{
  //   console.log("All customers",customer.findAll({attributes:['id','name','email']}))
  // })
  // .then(customer => {
  //   customerId = customer.id;
  //   console.log("First Customer Created: ",customer);
  //   return customer.createOrder({total: 45});
  // })
  // .then(order => {
  //   console.log("Order is : ",order);
  //   return Order.findAll({ where: customerId});
  // })
  // .then(orders => {
  //   console.log("All the Orders are : ",orders);
  //   return Order.findAll({where:{total:{[Op.gt]: 45}}})
  // }).then(orders=>{
  //     console.log("order list",orders)
  // })

  // .catch((err) => {
  //   console.log(err);
  // });

  app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});