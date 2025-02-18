const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');

router.post('/student', async (req, res) => {
    const { studentName, feedback } = req.body;
    const newFeedback = new Feedback({ name: studentName, feedback, role: 'student' });
    await newFeedback.save();
    res.status(201).send('Feedback gespeichert');
});

router.post('/teacher', async (req, res) => {
    const { teacherName, feedback } = req.body;
    const newFeedback = new Feedback({ name: teacherName, feedback, role: 'teacher' });
    await newFeedback.save();
    res.status(201).send('Feedback gespeichert');
});

router.get('/results', async (req, res) => {
    const studentFeedbacks = await Feedback.find({ role: 'student' });
    const teacherFeedbacks = await Feedback.find({ role: 'teacher' });
    res.json({ studentFeedbacks, teacherFeedbacks });
});

module.exports = router;