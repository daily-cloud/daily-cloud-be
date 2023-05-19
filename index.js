const express = require('express');
const cors = require('cors');

// Router
const journalRouters = require('./src/routes/journalRouter');
const authRouter = require('./src/routes/authRouter');

const app = express();
const port = parseInt(process.env.PORT) || 8000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.status(200);
  res.send({ message: 'Welcome to Daily Cloud API', version: '1.0.0' });
});

app.use('/api/journals', journalRouters);
app.use('/api/auth', authRouter); // for auth testing purpose

// Server Listening
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Test
