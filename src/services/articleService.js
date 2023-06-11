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

  async getArticleById(id) {
    const snapshot = await this.articlesRef.doc(id);
    const doc = await snapshot.get();

    if (!doc.exists) {
      return null;
    }

    return doc.data();
  }
}

module.exports = articleService;
