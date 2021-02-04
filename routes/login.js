var express = require('express')
var { Sequelize , Model} = require('sequelize');
var model = require('../model/')
var router = express.Router()

router.post("/" , async (req , res)=>{
  console.log(req.body)
  const users = {name:req.body.username , password:req.body.password}

  var username = await model.users.findAll({
attributes: { exclude: ['createdAt' , 'updatedAt'] } ,
where: {
  username:users.name
}
});


if(username.length!=0 && username[0].dataValues.username==users.name && username[0].dataValues.password==users.password){
  res.send("true")
}
else{
  res.send("false")
}

})

module.exports = router
