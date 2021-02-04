var express = require('express')
var { Sequelize , Model} = require('sequelize');
var model = require('../model/')
var router = express.Router()

/* GET Production Report. */
router.post('/', async (req , res)=>{


  var data = await model.manpowerdaily.findAll().catch(()=>{
    console.log("Error retrieving data")
  });


  res.send(data)

}
);

module.exports = router;
