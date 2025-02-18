const express = require('express');
const mongoose = require('mongoose');
const feedbackRoutes = require('./routes/feedback');
const app = express();

mongoose.connect('mongodb://localhost:27017/feedback', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use('/api/feedback', feedbackRoutes);
app.use(express.static('../frontend'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server läuft auf Port ${PORT}`);
});