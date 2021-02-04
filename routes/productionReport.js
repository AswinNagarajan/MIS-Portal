var express = require('express');
var router = express.Router();
var model = require('../model/')
var { Sequelize , Model} = require('sequelize');

/* GET Production Report. */

router.post('/', async (req, res, next) => {
  // res.render('index', { title: 'Express' });






  const data = await model.book.findAll(
    {
  attributes: { exclude: ['pricePerPage','totalPrice'] }
}
)




  res.send(data)
});



module.exports = router;
