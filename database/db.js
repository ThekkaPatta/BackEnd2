const mongoose = require('mongoose'); //third party

mongoose.connect('mongodb://127.0.0.1:27017/ThekkaPatta',{
//to remove deprecated warnings....
useNewUrlParser:true,
useCreateIndex:true,
useUnifiedTopology : true
})