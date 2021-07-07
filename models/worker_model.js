const mongoose = require('mongoose'); //third party

const Register = mongoose.model('Register',{
    FullName: {
        type:String,
        required : true
    },
    Address: {
        type: String,
        required: true
    },
    PhoneNo:{
        type : String,
        required: true
    },
    Skills:{
        type:String,
        required:true
    },
    Username:{
        type : String,
        required: true
    },
    Password:{
        type : String,
        required:true
    },
    Wimage:{
        type: String
    },
    WCitzimage:{
        type: String,
        required:true
    },
    Citznumber:{
        type: String,
        required:true
    },
    Certifyimage:{
        type: String,
        required:true
    }
})
module.exports = Register;