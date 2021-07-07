const mongoose = require('mongoose');

const Work = mongoose.model('Work',{
    Work_id: {
        type:String,
        required : true
    },
    Username: {
        type: String,
        required: true
    },
    Tags:{
        type : String,
        required: true
    },
    Phoneno:{
        type : String,
        required: true
    },
    Workdescription:{
        type : String,
        required:true
    },
    Wimage:{
        type: String
    }

})
module.exoprts = Work;