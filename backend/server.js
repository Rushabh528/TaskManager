const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 5000;

const taskRoutes = require("./routes/tasks");

const app = express();
app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://task-manager-lovat-sigma.vercel.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));
// app.options("*", cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("DB connected"))
    .catch(err => console.log(err));

app.use("/tasks", taskRoutes);

app.get("/", (req, res) => {
    res.send("API Running");
});

app.listen(PORT, () => {
    console.log("Server running on port 5000");
});