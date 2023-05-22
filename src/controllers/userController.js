const User = require('../models/UserModel');

async function getUserDetails(req, res) {
  // Get uid from token (from middleware)
  const { uid } = req.user;

  const user = new User({ uid });
  const userDetails = await user.getUserDetails();

  res.status(200);
  res.send({ uid, data: userDetails });
}

// sign up and login are handled by firebase (client side)
// so this controller is for adding the data to firestore
async function signUpUser(req, res) {
  const { uid, email } = req.user;
  const { name, birthday, imageUrl } = req.body;

  const user = new User({ uid, email, name, birthday, imageUrl });

  await user.save();

  res.status(201);
  res.send({ message: 'User created successfully', uid });
}

module.exports = { getUserDetails, signUpUser };
