const express = require('express');
const model = require('../model/model');

const router = express.Router();

module.exports = router;

router.post('/post', async (req, res) => {
    // res.send('Post API')
    const data = new model({
        name: req.body.name,
        age: req.body.age
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    } catch(error) {
        res.status(400).json({message: error.message})
    }
})

router.get('/getAll', async (req, res) => {
    // res.send('Get All API')
    try {
        const data = await model.find();
        res.json(data)        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.get('/getOne/:id', async (req, res) => {
    // res.send(req.params.id)
    try {
        const data = await model.findById(req.params.id);
        res.json(data)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.patch('/update/:id', async (req, res) => {
    // res.send('Update by ID API')
    try {
        const id = req.params.id;
        const updateData = req.body;
        const options = { new: true};

        const result = await model.findByIdAndUpdate(
            id, updateData, options
        )

        res.send(result)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

router.delete('/delete/:id', async (req, res) => {
    // res.send('Delete by ID API')
    try {
        const id = req.params.id;
        const data = await model.findByIdAndDelete(id);
        res.send(`Document with ${data.name} has been deleted.`)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})



