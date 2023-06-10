const journalService = require('../services/journalService');

// Service
const service = new journalService();

// Handler
async function getAllJournals(req, res) {
  try {
    const uid = req.user.uid;

    const journals = await service.getAllJournals(uid);

    if(journals){
      res.status(200);
      res.send({ 
        status: 'success',
        journals: journals
      });
    }
    else{
      res.status(404).json({ message: 'Journal not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
}

async function getJournalById(req, res, next) {
  try {
    const { journalId } = req.params;

    const journal = await journalService.getJournalById(journalId);
    
    if(journal){
      // save data journal on res.locals
      res.locals.journal = journal;
      next();

      res.status(200);
      res.send({ 
        status: 'success',
        journals: journal
      });
    }
    else{
      res.status(404).json({ message: 'Journal not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
}

// async function addNewJournal(req, res) {

// }

module.exports = { getAllJournals, getJournalById};
