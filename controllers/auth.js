const User = require('../models/user');

function register(req, res, next) {
  User
    .create(req.body)
    .then((user) => {
        res.status(201).json({ message: 'Registration successful'});
    })
    .catch(next);
}

module.exports = {
  register
}
