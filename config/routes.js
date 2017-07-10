const router = require('express').Router();
const UserController = require('../controllers/users');
const authController = require('../controllers/auth')

router.route('/')
  .get(UserController.index)

router.route('/register')
  .post(authController.register)


router.all('*', (req, res) => res.notFound());

module.exports = router;
