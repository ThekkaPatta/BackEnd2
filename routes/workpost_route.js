const express = require('express');
const { check, validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const Work = require('../models/work_model');
const jwt = require('jsonwebtoken');
const router = express.Router();
const upload = require('../Middleware/Upload');


//posting work 
router.post('/work/post', upload.single('Wimage'),function (req, res) {
    console.log(req.body)
    const errors = validationResult(req);

    if (errors.isEmpty) {
        //valid
        const Username = req.body.Username;
        const Tags = req.body.Tags;
        const PhoneNo = req.body.PhoneNo;
        const Workdescription = req.body.Workdescription;

            const data = new Work({
                Username: Username,
                Tags: Tags,
                PhoneNo: PhoneNo,
                Workdescription: Workdescription,
                Wimage:"/"+req.file.filename,
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
module.exports = router;