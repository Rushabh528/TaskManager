const express = require("express");
const router = express.Router();
const Task = require("../models/task");


// CREATE TASK
router.post("/", async (req, res) => {
    try {
        const task = new Task(req.body);
        const savedTask = await task.save();
        res.json(savedTask);
    } catch (error) {
        res.status(500).json(error);
    }
});


// GET ALL TASKS
router.get("/", async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json(error);
    }
});


// UPDATE TASK
router.put("/:id", async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updatedTask);
    } catch (error) {
        res.status(500).json(error);
    }
});


// DELETE TASK
router.delete("/:id", async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.json({ message: "Task deleted" });
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;