const admin = require('../services/firebase');

async function verifyToken(req, res, next) {
  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader) {
    res.status(401);
    res.send({
      message: 'Unauthenticated',
      error: 'Access Denied. No token provided',
    });
    return;
  }

  // Bearer <token>
  const userToken = authorizationHeader.split(' ')[1];

  try {
    // Verify token
    const decodedToken = await admin.auth().verifyIdToken(userToken);

    // Pass decoded token to next middleware or route handler
    req.user = decodedToken;

    next();
  } catch (err) {
    console.error(`Token verification failed : ${err}`);
    res.status(401);
    res.send({ message: 'Unauthenticated', error: 'Token is not valid' });
  }
}

module.exports = verifyToken;
