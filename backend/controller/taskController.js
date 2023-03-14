const Task = require("../Model/model");

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(200).json(task)
       } catch (error) {
        res.status(500)
       }
}

const fetchTask = async (req, res) => {
    try {
        const tasks = await Task.find()
        res.status(200).json(tasks)
       } catch (error) {
        res.status(500)
       }
}

const singleTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findById(id)
        if (!task) {
            return res.status(404).json(`No Task with id: ${id}`)   
        }
        res.status(200).send("single task")
    } catch (error) {
        
    }
}

const deleteTask = async (req, res) => {
        try {
            const { id } = req.params
            const task = await Task.findByIdAndDelete(id)
            if(!task){
                return res.send(`id is deleted ${id}`)
            }
            res.send(`id is deleted ${id}`)

        } catch (error) {
            console.log(error);
        }
}

const editTask = async (req, res) =>{
    try {
        const { id } = req.params
        const task = await Task.findByIdAndUpdate({ _id:id}, req.body, {
            new: true,
            runValidators: true,
        });

        if(!task){
            return res.send("no task")
        }
        res.json(task)
    } catch (error) {
        res.json(error.message);
    }
}

module.exports = {
    createTask,
    fetchTask,
    singleTask,
    deleteTask,
    editTask
}