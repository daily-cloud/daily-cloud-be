const firestore = require('./firestore');

class quoteService {
  constructor() {
    this.quotesRef = firestore.collection('quotes');
  }

  async getAllQuotes() {
    const snapshot = await this.quotesRef.get();

    if (snapshot.empty) return null;

    const quotes = snapshot.docs.map((doc) => doc.data());

    return quotes;
  }

  async getQuoteOfTheDay() {
    const quotes = await this.getAllQuotes();

    if (!quotes) return null;

    const quoteOfTheDay = quotes[Math.floor(Math.random() * quotes.length)];

    return quoteOfTheDay;
  }
}

module.exports = quoteService;
