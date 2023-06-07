const { Router } = require('express');
const { getAllJournals, 
        getAllJournalsById, 
        getJournalById, 
        addNewJournal,
        addNewJournalWithoutContent
      } = require('../controllers/journalController');

const router = Router();

// TODO: Create a Journal API
// 1. GET All journals
// 2. GET All Journals by User ID
// 3. GET Journal by correct ID
// 4. Add Journal with Complete Data
// 5. Add Journal without content

// Get all journals
router.get('/allJournals', getAllJournals);

router.get('/allJournals/{id}', getAllJournalsById);

router.get('/journal/{id}', getJournalById);

router.post('/newJournal', addNewJournal);

router.post('/newJournalWithoutContent', addNewJournalWithoutContent);

module.exports = router;
