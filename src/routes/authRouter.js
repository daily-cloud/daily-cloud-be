// For check Authentication purpose

const { Router } = require('express');
const verifyToken = require('../middlewares/authentication');

const router = Router();

router.get('/verify', verifyToken, (req, res) => {
  const { uid } = req.user;
  res.send({ message: `Hello ${uid}!`, userInformation: req.user });
});

module.exports = router;
