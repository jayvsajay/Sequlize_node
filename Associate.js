const Sequelize=require('sequelize')
const sequelize = require('./util/database')
const {DataType,Op}=Sequelize


const Country=sequelize.define('country' ,{
    countryName:{
        type:Sequelize.STRING,
        unique:true
    }
},
{
  timestamp:false  
});


const Captial=sequelize.define('capital',{
    capitalName:{
        type:Sequelize.STRING,
        unique:true
    }
},{
    timestamp:false
});

Country.hasOne(Captial);
let capital,country;
sequelize.sync({alter:true})
// .then(()=>{
//   return Captial.findOne({where:{capitalName:'Delhi'}})
// }).then((result)=>{
//     capital=result
//     return Country.findOne({where:{countryName:'India'}})
// })
// .then((data)=>{
//     country=data
//     country.setCapital(capital)
// })
// .then(()=>{
//     return Country.findOne({where:{countryName:'India'}})
// }).then((data)=>{
//     country=data;
//     return country.getCapital()
// }).then((data)=>{
//     console.log(data.toJSON())
// })
//capital.hasone(country,{
//foreginkey:'soccur'
//type:Sequalize.integer
//})
//Capital.belongsTo(Country,{onDelete:'CASCADE'})
//Country.hasOne(Capital,{onUpdate:'CASCADE'});
//sequelize.sync({alter:true}).then(()=>{
//return country.destroy({where:{countryName:'India'}})
//}).then((data)=>{
    //console.log(data)
//})
.then(()=>{
    return Country.findOne({countryName:'UK'})
}).then((data)=>{
    country=data;
    return country.createCapital({
        capitalName:'paris'
    })
}).then((data)=>{
    console.log(data.toJSON())
})
.catch(
    (err)=>{
    console.log(err)
})