const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"]
    },
    section: {
        type: String,
        required: [true, "section is required"],
        enum: {
            values: ["A", "B", "C", "D"],
        }
    },
    price: {
        type: Number,
        required: [true, "price is required "],
        min: 1,
        max: 30
    },
    rating: {
        type: Number,
        default: 4.9,
        max: 5.0,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("User", UserSchema);