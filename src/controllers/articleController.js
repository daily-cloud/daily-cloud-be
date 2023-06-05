const articleService = require('../services/articleService');

// Service
const service = new articleService();

// Handler
async function getAllArticles(req, res) {
  const articles = await service.getAllArticles();

  if (!articles) {
    res.status(404);
    res.send({
      status: 'error',
      message: 'No articles found',
    });
    return;
  }

  res.status(200);
  res.send({
    status: 'success',
    message: 'Articles retrieved successfully',
    articles: articles,
  });
}

module.exports = { getAllArticles };
