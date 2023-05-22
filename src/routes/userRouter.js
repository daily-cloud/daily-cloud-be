const { Router } = require('express');
const isAuthenticated = require('../middlewares/authentication');
const { signUpUser, getUserDetails } = require('../controllers/userController');

const router = Router();

router.post('/signup', signUpUser);
router.get('/details', getUserDetails);

module.exports = router;
