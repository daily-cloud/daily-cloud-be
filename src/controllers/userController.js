const User = require('../models/UserModel');

async function getUserDetails(req, res) {
  // Get uid from token (from middleware)
  const { uid } = req.user;

  const user = new User({ uid });
  const userDetails = await user.getUserDetails();

  res.status(200);
  res.send({
    status: 'success',
    message: 'User details retrieved successfully',
    data: userDetails,
  });
}

// sign up and login are handled by firebase (client side)
// so this controller is for adding the data to firestore
async function signUpUser(req, res) {
  const { uid, email } = req.user;
  const { name, birthday, imageUrl } = req.body;

  const user = new User({ uid, email, name, birthday, imageUrl });

  await user.save();

  res.status(201);
  res.send({ status: 'success', message: 'User created successfully', uid });
}

async function updateUserDetails(req, res) {
  const { uid } = req.user;
  const data = req.body;

  const updatedUserData = {
    uid,
    ...data,
  };

  const user = new User(updatedUserData);

  const updatedUser = await user.updateUserDetails();

  res.status(200);
  res.send({
    status: 'success',
    message: 'User details updated successfully',
    data: updatedUser,
  });
}

async function uploadUserImage(req, res) {
  const { uid } = req.user;
  const image = req.file;

  if (!image) {
    res.status(400);
    res.send({ status: 'failed', message: 'No file uploaded!' });
    return;
  }

  const imagePath = image.path;

  console.log(imagePath);

  // res.send('Image uploaded successfully');
  const user = new User({ uid });

  const imageUrl = await user.uploadImage(imagePath);
  await user.updateUserDetails({ imageUrl });

  res.status(201);
  res.send({
    status: 'success',
    message: 'Image uploaded successfully',
    data: {
      imageUrl,
    },
  });
}

module.exports = {
  getUserDetails,
  signUpUser,
  updateUserDetails,
  uploadUserImage,
};
