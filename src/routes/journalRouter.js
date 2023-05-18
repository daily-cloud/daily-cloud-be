const { Router } = require('express');
const { getAllJournals } = require('../controllers/journalController');

const router = Router();

// TODO: Create a Journal API
// 1. GET All journals
// 2. GET All Journals by User ID
// 3. GET Journal by ID
// 4. POST a new Journal

// Get all journals
router.get('/', getAllJournals);

module.exports = router;
