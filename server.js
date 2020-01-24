// DEPENDENCIES
const express = require('express');
const connectDB = require('./config/db');

const app = express();

const PORT = process.env.PORT || 5000;

// Connect database
connectDB();

// Init middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API running'));

// Define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/namus', require('./routes/api/namus'));
app.use('/api/crimes', require('./routes/api/crimes'));
app.use('/api/unidentified', require('./routes/api/unidentified'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));