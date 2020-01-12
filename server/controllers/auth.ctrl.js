const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

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
      res.send({'status': 200, 'message': 'Successful sign up'});
    })
    .catch(err => {
      console.log(err);
      res.send(err, {'status': 500});
      return next(err) 
    });
  })
}

module.exports.signin = (req, res, next) => {
  let dbUser
  User.findOne({email: req.body.email})
  .then(user => {
    if(!user) {
      return res.send({'status': 401, 'message': 'Authentication failed'})
    } else {
      dbUser = user
      return bcrypt.compare(req.body.password, user.password)
    }
  })
  .then(result => {
    if (!result) {
      return res.send({'status': 401, 'message': 'Authentication failed'})
    } else {
      const token = jwt.sign(
        {email: dbUser.email, userId: dbUser._id},
        'secret_secret',
        {expiresIn: '365d'})
        res.send({'status': 200, 'message': 'Successful logged in', 'token': token})
    }
  })
  .catch(err => {
    console.log(err);
    res.status(status).send(body)
    return next(err) 
  });
}