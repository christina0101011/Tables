const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, 'secret_secret');
    next()
  } catch (err) {
    return res.send({'status': 401, 'message': 'Authentication failed'});
  }
}
