const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

const connect = () => {
    return mongoose.connect("mongodb+srv://harivara:harivara@cluster0.yw10a2d.mongodb.net/harivara?retryWrites=true&w=majority");
};

const dummyController = require("./controllers/dummy.controller");
const usersController = require("./controllers/users.controller");

app.use("/dummy", dummyController);
app.use("/users", usersController);

app.listen(8080, async () => {
    try {
        await connect();
        console.log("listening on port 8080");
    } catch (error) {
        console.log(error.message);
    }
});