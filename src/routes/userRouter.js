const { Router } = require('express');
const multer = require('multer');

const upload = multer({
  storage: multer.memoryStorage(),
});

const {
  signUpUser,
  getUserDetails,
  updateUserDetails,
  uploadUserImage,
} = require('../controllers/userController');

const router = Router();

router.post('/signup', signUpUser);
router.post('/uploadImage', upload.single('image'), uploadUserImage);
router.put('/update', updateUserDetails);
router.get('/details', getUserDetails);

module.exports = router;
