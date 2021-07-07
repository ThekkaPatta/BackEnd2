const express = require('express');
const { check, validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const Register = require('../models/work_model');
const jwt = require('jsonwebtoken');
const router = express.Router();
const upload = require('../Middleware/Upload');
// const auth = require('../Middleware/Authenticate')

router.post('/work/post',  upload.single('Wimage'), function (req, res) {
    console.log(req.body)
    const errors = validationResult(req);

    // res.send(errors.array());
    if (errors.isEmpty) {
        //valid
        const Username = req.body.Username;
        const Tags = req.body.Tags;
        const Phoneno = req.body.Phoneno;
        const Workdescrioption = req.body.Workdescription;
        const Wimage = req.file.path;
        // console.log(us);
        // console.log(add); 
            const data = new Register({
                Username: Username,
                Tags: Tags,
                Phoneno: Phoneno,
                Workdescription: Workdescription,
                Wimage:"/Images/" + req.file.filename,
            });
            data.save()
                .then(function (result) {
                    res.status(201).json({ message: "Work posted success !!!!" })
                })// sucessess vayo ki vaena
                .catch(function (err45) {
                    res.status(500).json({ error: err45 })
                })// error aayo ki aayena

    }
    else {
        //invalid
        res.status(400).json(errors.array());
    }
})

