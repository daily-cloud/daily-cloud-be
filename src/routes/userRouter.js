const { Router } = require('express');
const isAuthenticated = require('../middlewares/authentication');
const {
  signUpUser,
  getUserDetails,
  updateUserDetails,
} = require('../controllers/userController');

const router = Router();

router.post('/signup', signUpUser);
router.put('/update', updateUserDetails);
router.get('/details', getUserDetails);

module.exports = router;
