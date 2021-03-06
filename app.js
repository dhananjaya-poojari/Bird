import createError from 'http-errors';
import express from'express';
import path from'path';
import cookieParser from'cookie-parser';
import logger from 'morgan';
import connectDB from './Database/connection';

//import indexRouter from './routes/index';
//import usersRouter from './routes/users';
import birdsRouter from "./routes/birds";

var app = express();

// view engine setup

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/birds', birdsRouter);

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

connectDB().then(() => {
  app.listen(port, () => console.log("Server started on 5000"));
});

module.exports = app;
