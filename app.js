var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')

var productionReportRouter = require('./routes/productionReport');
var productionReportInsert = require('./routes/productionReportInsert')

var manPowerDailyRouter = require('./routes/manPowerDaily');
var loginRouter = require('./routes/login')
var registerRouter = require('./routes/register')
var invoiceRouter = require('./routes/invoice')
var updateProductionTable = require('./routes/updateProductionTable')
var insertInvoiceNo = require('./routes/insertInvoiceNo')
var invoicedData = require('./routes/invoicedData')


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//code

app.use(cors({
   credentials:true,
   origin: ['http://localhost:3001']
 }));



app.use('/login' , loginRouter);
app.use('/register' , registerRouter);
app.use('/manPowerDaily' , manPowerDailyRouter);


app.use('/productionReport', productionReportRouter);
app.use('/productionReportInsert',productionReportInsert)
app.use('/invoice',invoiceRouter)
app.use('/updateProductionTable',updateProductionTable)
app.use('/insertInvoiceNo',insertInvoiceNo)
app.use('/invoicedData',invoicedData)




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


app.listen(3003)


module.exports = app;
