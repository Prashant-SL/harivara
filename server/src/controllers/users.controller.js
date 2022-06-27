const express = require('express');

const router = express.Router();

const User = require('../models/users.model.js');

router.get('', async (req, res) => {
    try {
        const page = req.query.page || 1;
        const size = req.query.size || 10;

        const totalPages = Math.ceil((await User.find().countDocuments()) / size);

        const users = await User.find().skip((page - 1) * size).limit(size).lean().exec();
        return res.send(users);
    } catch (err) {
        return res.status(500).send(err.message);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const users = await User.findById(req.params.id).lean().exec();
        return res.send(users);
    } catch (err) {
        return res.status(500).send(err.message);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const users = await User.findByIdAndDelete(req.params.id).lean().exec();
        return res.send(users);
    } catch (err) {
        return res.status(500).send(err.message);
    }
});

router.post('', async (req, res) => {
    try {
        const users = await User.create(req.body);
        return res.status(800).send(users);
    } catch (err) {
        return res.send(err.message);
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const users = await User.findByIdAndUpdate(req.params.id, req.body);
        return res.status(201).send(users);
    } catch (err) {
        return res.send(err.message);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const users = await User.findById(req.params.id).lean().exec();
        return res.send(users);
    } catch (err) {
        return res.status(500).send(err.message);
    }
});

module.exports = router;
