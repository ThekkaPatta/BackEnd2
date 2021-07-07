const express = require('express');
const { check, validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const Register = require('../models/register_model');
const jwt = require('jsonwebtoken');
const router = express.Router();
const upload = require('../Middleware/Upload');
const auth = require('../Middleware/Authenticate')

router.post('/Wregister/insert',  upload.single('Uimage','Citzimage','Certifyimage'), function (req, res) {
    console.log(req.body)
    const errors = validationResult(req);

    // res.send(errors.array());
    if (errors.isEmpty) {
        //valid
        const WFullName = req.body.WFullName;
        const WAddress = req.body.WAddress;
        const WPhoneNo = req.body.WPhoneNo;
        const WSkills = req.body.WSkills;
        const WUsername = req.body.WUsername;
        const WPassword = req.body.WPassword;
        const WCitznumber = req.body.WCitznumber;
        const Wimage = req.file.path;
        const WCitzimage = req.file.path;
        const Certifyimage = req.file.path;
        // console.log(us);
        // console.log(add); 
        bcryptjs.hash(Password, 10, function (err, hash) {
            const data = new Register({
                WFullName: WFullName,
                WAddress: WAddress,
                WPhoneNo: WPhoneNo,
                WSkills: WSkills,
                WUsername: WUsername,
                WPassword: hash,
                WCitznumber: WCitznumber,
                Wimage:"/Images/workerimage" + req.file.filename,
                WCitzimage:"/Images/citzensipimage" + req.file.filename,
                Certifyimage ="/Images/certificationimage"+ req.file.path,
            });
            data.save()
                .then(function (result) {
                    res.status(201).json({ message: "Registration success !!!!" })
                })// sucessess vayo ki vaena
                .catch(function (err45) {
                    res.status(500).json({ error: err45 })
                })// error aayo ki aayena
        })

    }
    else {
        //invalid
        res.status(400).json(errors.array());
    }
})
module.exports = router;