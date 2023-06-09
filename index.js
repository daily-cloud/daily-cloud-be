const express = require('express');
const cors = require('cors');

// Import Middlewares from middlewares layer
const notFound = require('./src/middlewares/notFound');
const isAuthenticated = require('./src/middlewares/authentication');

// dotenv
require('dotenv').config();

// Router
const journalRouter = require('./src/routes/journalRouter');
const authRouter = require('./src/routes/authRouter');
const userRouter = require('./src/routes/userRouter');
const articleRouter = require('./src/routes/articleRouter');
const quoteRouter = require('./src/routes/quoteRouter');

const app = express();
const port = process.env.PORT;

// Middlewares for all routes
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.status(200);
  res.send({ message: 'Welcome to Daily Cloud API', version: '0.5.1' });
});

app.post('/', (req, res) => {
  res.status(200);
  res.send({ message: 'Hello!', reqBody: req.body });
});

app.get('/docs', (req, res) => {
  res.status(200);
  res.redirect(
    'https://github.com/daily-cloud/daily-cloud-be/blob/development/API-Documentation.md'
  );
});

app.use('/api/journals', isAuthenticated, journalRouter);
app.use('/api/auth', isAuthenticated, authRouter); // for auth testing purpose
app.use('/api/users', isAuthenticated, userRouter);
app.use('/api/articles', isAuthenticated, articleRouter);
app.use('/api/quotes', isAuthenticated, quoteRouter);

// Server Listening
app.listen(port, () => {
  console.log(
    `Server is running on port ${port} in ${process.env.ENVIRONMENT} mode`
  );
});

// 404 not found middleware
app.use(notFound);
