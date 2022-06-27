const mongoose = require("mongoose");
const URL = "mongodb+srv://harivara:harivara@cluster0.yw10a2d.mongodb.net/harivara?retryWrites=true&w=majority";
module.exports = () => {
    return mongoose.connect(URL);
};
