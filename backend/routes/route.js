const express = require("express");
const Task = require("../Model/model")
const {fetchTask, createTask, singleTask, deleteTask, editTask} = require("../controller/taskController")
const router = express.Router();

// router.route("/").post(createTask).get(fetchTask)

 router.post("/", createTask);

 router.get("/", fetchTask);

 router.get("/:id", singleTask);

 router.delete("/:id", deleteTask)

 router.put("/:id", editTask)


 module.exports = router