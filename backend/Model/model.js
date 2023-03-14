const mongoose = require("mongoose");

const taskScheme = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "plzz enter task"]
        },
        complete:{
            type: Boolean,
            required: true,
            default: false
        }
    },
    {
        timestamps: true
    }
)

const Task = mongoose.model("Task", taskScheme)
module.exports = Task