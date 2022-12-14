const express = require('express');
const dotenv = require("dotenv");
const connectDB = require("./database/db");
const UserRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());
dotenv.config();

const database = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
    } catch (error) {
        console.log(error);
    }
}
database();

app.use("/users", UserRoutes);

const Port = process.env.Port || 3000;

app.listen(Port, () => {
    console.log(`Port ${Port} is Running`);
})