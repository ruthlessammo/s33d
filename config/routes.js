const router = require('express').Router();
const UserController = require('../controllers/users');
const authController = require('../controllers/auth')

router.all('*', (req, res, next)=>{
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 'Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  return next();
});

router.route('/')
router.route('/register')
  .post(authController.register)
router.route('/users')
  .get(UserController.index)
router.route('/users/:id')
  .get(UserController.show)

router.all('*', (req, res) => res.notFound());

module.exports = router;
