// For check Authentication purpose
const { Router } = require('express');

const router = Router();

router.get('/verify', (req, res) => {
  const { uid } = req.user;
  res.send({ message: `Hello ${uid}!`, userInformation: req.user });
});

module.exports = router;
