const express = require('express');
const subject = require('../model/subjects');

const router = express.Router();

module.exports = router;

router.post('/post', async (req, res) => {
    const data = new subject({
        subject: req.body.subject,
        code: req.body.code
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})