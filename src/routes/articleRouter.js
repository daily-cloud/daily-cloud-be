const { Router } = require('express');
const {
  getAllArticles,
  getArticleById,
} = require('../controllers/articleController');

const router = Router();

router.get('/', getAllArticles);
router.get('/:id', getArticleById);

module.exports = router;
