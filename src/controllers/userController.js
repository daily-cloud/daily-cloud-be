const User = require('../models/UserModel');

async function getUserDetails(req, res) {
  // Get uid from token (from middleware)
  const { uid } = req.user;

  const user = new User({ uid });
  const userDetails = await user.getUserDetails();

  res.status(200);
  res.send({ uid, data: userDetails });
}

module.exports = { getUserDetails };
