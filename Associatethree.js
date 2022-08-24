const Sequelize=require('sequelize')
const sequelize=require('./util/database')

const Customer=sequelize.define('customersdata',{
    customerName:{
        type:Sequelize.STRING
    }
},{
    timestamps:false
})

const Products=sequelize.define('Productstable',{
    productName:{
        type:Sequelize.STRING
    }
},{
    timestamps:false
})
const CustomerProduct=sequelize.define('customerproduct',{
    customerId:{
        type:Sequelize.INTEGER
    }
},{
    timestamps:false
})

Customer.belongsToMany(Products,{through:CustomerProduct})
Products.belongsToMany(Customer,{through:CustomerProduct})
let customer,product;
sequelize.sync({alter:true}).then(()=>{
   return Customer.findOne({where:{customerName:'Ajay'}})
}).then((data)=>{
    customer=data
    return Products.findAll()
}).then((data)=>{
    product=data
    return customer.addProductstables(product)
}).then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})
