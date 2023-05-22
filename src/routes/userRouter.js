const { Router } = require('express');
const { getUserDetails } = require('../controllers/userController');

const router = Router();

router.get('/details', getUserDetails);

module.exports = router;
