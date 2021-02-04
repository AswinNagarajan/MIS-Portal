var express = require('express')
var { Sequelize , Model} = require('sequelize');
var model = require('../model/')
const { Op } = require("sequelize");
var router = express.Router()

/* GET Production Report. */
router.post('/', async (req , res)=>{

  console.log("insertInvoiceNo")

  req.body.invoiceData.forEach(async (item)=>{
    console.log(item)
    var data = await model.book.update({ invoiceNo: req.body.invoiceNo ,
    invoiced:"YES",totalPrice:item[1] , pricePerPage:item[2]}, {
  where: {
    bookId: item[0]
  }}
).then(req=>{
  return req
}).catch(()=>{
     res.send(req.body)
   })
})


  res.send({invoiceNo: req.body.invoiceNo ,
  invoiced:"YES" })
}
);

module.exports = router;
