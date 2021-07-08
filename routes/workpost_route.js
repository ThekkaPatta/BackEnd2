const express = require('express');
const { check, validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const Work = require('../models/work_model');
const jwt = require('jsonwebtoken');
const router = express.Router();


router.post('/work/post',function (req, res) {
    console.log(req.body)
    const errors = validationResult(req);

    // res.send(errors.array());
    if (errors.isEmpty) {
        //valid
        const Username = req.body.Username;
        // const Tags = req.body.Tags;
        const PhoneNo = req.body.PhoneNo;
        const Workdescription = req.body.Workdescription;
        // const Wimage = req.file.path;
        // console.log(us);
        // console.log(add); 
            const data = new Work({
                Username: Username,
                // Tags: Tags,
                PhoneNo: PhoneNo,
                Workdescription: Workdescription,
                // Wimage:"/Images/" + req.file.filename,
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