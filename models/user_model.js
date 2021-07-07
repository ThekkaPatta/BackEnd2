const mongoose = require('mongoose'); //third party

const Register = mongoose.model('Register',{
    UFullName: {
        type:String,
        required : true
    },
    UAddress: {
        type: String,
        required: true
    },
    UPhoneNo:{
        type : String,
        required: true
    },
    UUsername:{
        type : String,
        required: true
    },
    UPassword:{
        type : String,
        required:true
    },
    Uimage:{
        type: String
    },
    UCitzimage:{
        type: String,
        required:true
    },
    UCitznumber:{
        type: String,
        required:true
    }
})
module.exports = Register;