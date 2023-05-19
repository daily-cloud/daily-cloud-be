// Middleware for handle 404 not found
function notFound(req, res) {
  res.status(404);
  res.send({
    error: {
      code: '404',
      message: 'Resource not found',
    },
  });
}

module.exports = notFound;
