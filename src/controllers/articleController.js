const ArticleService = require('../services/ArticleService');

// Service
const service = new ArticleService();

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

async function getArticleById(req, res) {
  const { id } = req.params;

  const article = await service.getArticleById(id);

  if (!article) {
    res.status(404);
    res.send({
      status: 'error',
      message: `Can't get article with id: ${id}`,
    });

    return;
  }

  res.status(200);
  res.send({
    status: 'success',
    message: `Article with id: ${id} retrieved successfully`,
    article,
  });
}

module.exports = { getAllArticles, getArticleById };
