const firestore = require('./firestore');

// Service to make an articles collection query
class articleService {
  constructor() {
    this.articlesRef = firestore.collection('articles');
  }

  async getAllArticles() {
    const snapshot = await this.articlesRef.get();

    if (snapshot.empty) {
      return null;
    }

    const articles = [];

    snapshot.forEach((doc) => {
      const article = doc.data();
      articles.push(article);
    });

    return articles;
  }
}

module.exports = articleService;
