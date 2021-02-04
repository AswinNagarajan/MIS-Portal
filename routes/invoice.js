var express = require('express')
var { Sequelize , Model} = require('sequelize');
var model = require('../model/')
const { Op } = require("sequelize");
var router = express.Router()

/* GET Production Report. */
router.post('/', async (req , res)=>{

  console.log("Invoice")

  var data = await model.book.findAll(
{
  attributes: ['clientId', 'bookId' , 'invoiced' , 'invoiceNo' , 'pricePerPage' , 'totalPrice'] ,
  where: {
[Op.and]: [{bookStatus:"UPLOADED"}, { invoiced:"NO" }],


 }
}
  )
  .catch(()=>{
    console.log("Error retrieving data")
  });

// const users = await model.book.findAll({
//         include: [
//             {
//                 model: model.client
//             }
//         ]
//     });


  console.log(data)
  res.send(data)

}
);

module.exports = router;
