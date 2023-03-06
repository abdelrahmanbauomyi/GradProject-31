const { sequelize, User } = require ('./models')
const express = require ('express')
const app = express();
//TEST CODE FOR THE DATABASE CONNECTION
app.use(express.json())
app.post('/users', async (req,res)=>{
try{
  const{firstName,lastName,password,email,dob,gender,mobilenumber,VerfiedEmail}= req.body;
  const user  = await User.create({firstName,lastName,password,email,dob,gender,mobilenumber,VerfiedEmail}) 
  return res.json(user)

}catch(err){
return res.status(500).json(err)
} 
})
 app.listen({port : 5000},async ()=>{
  console.log("running!!")
  await sequelize.sync({force:true})
  console.log('synced !!')
 })

