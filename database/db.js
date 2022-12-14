const mongoose = require("mongoose");

mongoose.set('strictQuery', true);

const connectDB = (url) => {
    console.log("DB is Connected");
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

}

module.exports = connectDB;