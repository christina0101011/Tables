const User = require('../models/user.model');
const bcrypt = require('bcrypt');

module.exports.signup = (req, res, next) => {
  bcrypt.hash(req.body.password, 10)
  .then(hash => {
    const user = new User({
      email: req.body.email,
      password: hash
    });
    user.save()
    .then(response => {
      console.log('New user has been created' );
      res.send({'status': 201, 'message': 'success'});
    })
    .catch(err => {
      console.log(err);
      res.send(err, {'status': 500});
      return next(err) 
    });
  })
}