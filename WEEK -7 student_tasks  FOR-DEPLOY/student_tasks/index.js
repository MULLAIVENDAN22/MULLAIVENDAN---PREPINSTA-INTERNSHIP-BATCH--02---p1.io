const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());

app.use(cors({
  origin: ['http://127.0.0.1:5500', 'http://localhost:5500'],
  credentials: true,
}));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/student_tasks', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("db connected"))
.catch(() => console.log("db not connected"));

// Define Mongoose Schemas
const courseSchema = new mongoose.Schema({
  name: String,
});

const taskSchema = new mongoose.Schema({
  courseId: String,
  taskName: String,
  dueDate: Date,
  details: String,
});

const Course = mongoose.model('Course', courseSchema);
const Task = mongoose.model('Task', taskSchema);

app.post('/tasks', async (req, res) => {
    try {
      const { courseId, taskName, dueDate, details } = req.body;
    
      const task = new Task({
        courseId,
        taskName,
        dueDate,
        details,
      });
      await task.save();
      res.status(201).json({ message: 'Task created successfully', task });
    } catch (error) {
      console.error('Error creating task:', error);
      res.status(500).json({ message: 'Error creating task' });
    }
  });
  

// API Route to retrieve tasks for a specific course
app.get('/courses/:courseId/tasks', async (req, res) => {
  try {
    const tasks = await Task.find({ courseId: req.params.courseId }).select('-_id').select('-__v');
    if (tasks.length > 0) {
      res.json(tasks);
    } else {
      res.status(404).json({ message: 'No tasks found for this course.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving tasks.' });
  }
});

// Start the server
app.listen(4000, () => {
  console.log('Server is running on http://localhost:4000');
});