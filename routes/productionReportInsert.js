var express = require('express');
var router = express.Router();
var model = require('../model/')
var { Sequelize , Model} = require('sequelize');


router.post('/', async (req, res, next) => {


  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date+' '+time;
  console.log(dateTime)


    const sequelize = new Sequelize('store', 'root', 'Aswin@123', {
      host: 'localhost',
      dialect: 'mysql'
    });


    console.log(req.body)

    var data = await model.book.create(
      {
        clientId:req.body.clientId,
        bookId:req.body.bookId,
        formatId:req.body.formatId,
        receivedDate: dateTime,
        estimatedDelivery:req.body.estimatedDelivery ,
        invoiced:req.body.invoiced,
        bookStatus: "PENDING",
        updatedAt: dateTime,
        createdAt: dateTime
     }

   ).catch(()=>{
     res.send("error")
   })






  res.send([["hello there"]])

});



module.exports = router;
