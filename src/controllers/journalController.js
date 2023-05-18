function getAllJournals(req, res) {
  res.status(200);
  res.send({ message: 'Journal API' });
}

module.exports = { getAllJournals };
