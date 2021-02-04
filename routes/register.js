var express = require('express')
var { Sequelize , Model} = require('sequelize');
var model = require('../model/')
var router = express.Router()

router.post("/" , async (req , res)=>{
  console.log(req.body.username)



var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
console.log(dateTime)


do{
  var x = Math.floor((Math.random() * 10000) + 1)
  var check = await model.users.findOne({
    where: {
      userId:x
    }
  }).catch(()=>{
    console.log("userId exists")
  });

  console.log(check)

}while(check!=null)



 var check = await model.users.findOne({
  where: {
    username: req.body.username
  }
}).catch(()=>{
  console.log("error")
});
  console.log("-------------")
  if (check!=null){
    res.send("Username exists")
  }




// while(await model.users.findAll({
//   where: {
//     userId:x
//   }
// })){
//    var x = Math.floor((Math.random() * 10000) + 1)
// }

const user = await model.users.create({
  userId:x,
  username: req.body.username,
  password: req.body.password,
  name: req.body.name,
  position: req.body.position,
  accessId: req.body.accessId,
  updatedAt: dateTime,
  createdAt: dateTime
}).catch(()=>{
  console.log("error")
})




// const jane = await model.users.create(
//   {
//
//   },
//   { fields: ['userid','username','password','name','position','accessId'] }
// )

  res.send("Registered User")

})

module.exports = router
