const User = require('../models/user.js');

class UserControllerConstructor{
  index(req, res, next) {
    User.find()
    .then(users => res.status(200).json(users))
    .catch(next);
  }

  show(req, res, next) {
    User.findById(req.params.id)
    .then((user) => {
      if(!user) return res.notFound();
      res.status(200).json(user);
    })
    .catch(next);
  }

  create(req, res, next) {
    console.log(req.body);
    User.create(req.body)
    .then(users => res.status(201).json(users))
    .catch(next);
  }
}

const UserController = new UserControllerConstructor;

module.exports = UserController;
