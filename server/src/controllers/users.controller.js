const express = require('express');

const router = express.Router();

const User = require('../models/users.model.js');

router.get('', async (req, res) => {
    try {
        let { page, size } = req.query
        if (!page) {
            page = 1;
        }
        if (!size) {
            size = 10;
        }

        let totalPages = Math.ceil((await User.find().countDocuments()) / size);

        const users = await User.find().skip((page - 1) * size).limit(size).lean().exec();
        return res.send({ page, size, data: users });
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
        console.log("PARAMS:::", req.params);
        const users = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
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
