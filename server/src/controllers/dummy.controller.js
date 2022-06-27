const express = require("express");
const router = express.Router();
const Dummy = require("../models/dummy.model");

router.post("/", async (req, res) => {
    try {
        const dummies = await Dummy.create(req.body);
        return res.send(dummies);
    } catch (er) {
        return res.send(er);
    }
});

router.get("/", async (req, res) => {
    try {
        const dummies = await Dummy.find().lean().exec();
        return res.send(dummies);
    } catch (er) {
        return res.send(er);
    }
});

module.exports = router;