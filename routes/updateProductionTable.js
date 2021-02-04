var express = require('express');
var router = express.Router();
var model = require('../model/')
var { Sequelize , Model} = require('sequelize');


router.post('/', async (req, res, next) => {


    const sequelize = new Sequelize('store', 'root', 'Aswin@123', {
      host: 'localhost',
      dialect: 'mysql'
    });


    console.log("hello")

    var data = await model.book.update({ bookStatus: req.body.bookStatus.toUpperCase() }, {
  where: {
    bookId: req.body.bookId
  }
}).catch(()=>{
     res.send(req.body)
   })






  res.send(req.body)

});



module.exports = router;
