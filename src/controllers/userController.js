const User = require('../models/UserModel');
const CloudStorage = require('../services/cloudStorage');

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

async function uploadUserImage(req, res, next) {
  const { uid } = req.user;

  const image = req.file;

  if (!image) {
    res.status(400);
    res.send({ status: 'failed', message: 'No file uploaded!' });
    return;
  }

  const storage = new CloudStorage('daily-cloud-user-images');
  const bucket = storage.bucket;

  const filename = `${uid}.${image.originalname.split('.').pop()}`;

  const blob = bucket.file(filename);
  const blobStream = blob.createWriteStream();

  blobStream.on('error', (err) => {
    res.status(500);
    res.send({ status: 'failed', message: err.message });
  });

  blobStream.on('finish', async (data) => {
    const imageUrl = new URL(
      `https://storage.googleapis.com/${bucket.name}/${blob.name}`
    );

    await bucket.file(filename).makePublic();

    res.status(201);
    res.send({
      status: 'success',
      message: 'Image uploaded successfully',
      data: {
        imageUrl,
      },
    });
  });

  blobStream.end(image.buffer);
}

module.exports = {
  getUserDetails,
  signUpUser,
  updateUserDetails,
  uploadUserImage,
};
