const express = require('express');

// Import our modular routers for /tips and /feedback
const apiRouter = require('./apiRoutes');
const feedbackRouter = require('./feedback');

const app = express();

app.use('/notes', apiRouter);
app.use('/feedback', feedbackRouter);

module.exports = app;
