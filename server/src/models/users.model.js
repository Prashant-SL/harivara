const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    date: { type: Date, required: false },
}, {
    versionKey: false,
    timestamps: true
});

module.exports = mongoose.model("user", userSchema);