// use the path of your model
const user = require('../models/worker_model');
// const worker = require('../models/worker_model')
const mongoose = require('mongoose');
// use the new name of the database
const url = 'mongodb://localhost:27017/test_thekkapatta';
beforeAll(async () => {
 await mongoose.connect(url, {
 useNewUrlParser: true,
 useCreateIndex: true
 });
});
afterAll(async () => {
 await mongoose.connection.close();
});

describe('Loginworker Test', () => {
// the code below is for insert testing
 it('Loginworker testing anything', async () => {
 const worker = {
     "WUsername" :"agraj",
     "WPassword" : "agraj"
 
 }
 
 return user.findOne({worker});
 });
})

