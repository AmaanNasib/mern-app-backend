const { urlencoded } = require("express");
const express = require("express")
// const connectDB = require("./config/config")
const dotenv = require("dotenv").config()
const mongoose = require("mongoose")
const Task = require("./Model/model")
const app = express()
const route = require("./routes/route")
const cors = require("cors")

app.use(cors({
    origin: ["http://localhost:3000", "https://mern-app-37cl.onrender.com/"]
}))
app.use(express.json());
app.use(urlencoded({extended: false}))
app.use("/api/tasks",route)

app.get("/", (req, res) =>{
    res.send("hello world")
})



// app.post("/api/tasks", async (req, res) =>{
//    try {
//     const task = await Task.create(req.body)
//     res.status(200).json(task)
//    } catch (error) {
//     res.status(500)
//    }
// });

// app.get("/api/tasks", async (req, res) =>{
//     try {
//      const tasks = await Task.find()
//      res.status(200).json(tasks)
//     } catch (error) {
//      res.status(500)
//     }
//  });



const PORT = process.env.PORT || 5000
mongoose
    .connect(process.env.MONGO_URL)
    .then(() =>{
        app.listen(PORT, () => {
            console.log("connected");
        })
    })
    .catch((err) => {
        console.log(err);
    })
// connectDB()


// mongodb+srv://ammannasib:<password>@amaannasibcluster.ryvftkb.mongodb.net/?retryWrites=true&w=majority