

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user.routes');
const contactRoutes = require('./routes/contact.routes');
require('dotenv').config();
const aiRoutes = require('./routes/ai.routes')

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/users', userRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/ai', aiRoutes)

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

module.exports = app;