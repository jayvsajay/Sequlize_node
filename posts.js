const Sequelize=require('sequelize')
const sequelize = require('./util/database')

const users=sequelize.define('users',{
    username:{
        type:Sequelize.STRING,
    },
    password:{
        type:Sequelize.STRING
    }
},
{
timestamp:false

})

const posts=sequelize.define('posts',{
    message:{
        type:Sequelize.STRING
    }},
    {
        timestamp:false
    
})
users.hasMany(posts,{onDelete:'CASCADE'})//delete foreign key related to primary key
posts.belongsTo(users)
let user,post;
sequelize.sync({alter:true}).then(()=>{
    return users.findOne();
}).then((data)=>{
    user=data
    return posts.findOne();
}).then((data)=>{
    post=data;
    post.setUser(user)
//})
//  return users.destroy({where:{username:'Ajay'}})
// }).then((data)=>{
//     user=data;
//     return posts.findAll()
// }).then((data)=>{
//     post=data;
//     return user.addPosts(post)
// }).then((data)=>{
//     console.log(data.toJSON())
// })
// }).then((data)=>{
//     user=data
//     return user.countPosts()
// }).then((data)=>{
//     console.log(data)
// })
// .then((data)=>{
//     user=data
//     return posts.findOne()
// }).then((data)=>{
//     post=data
//     return user.removePosts(post)
}).then((data)=>{
    console.log(data)
 })
 
.catch((err)=>{
    console.log(err)
})