const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers);

// /api/users/:userId
router.route('/:userId').get(getSingleUser);

// /api/users
router.route('/').post(createUser);

// /api/users
router.route('/').put(updateUser);

// /api/api/:userId
router.route('/:userId').delete(deleteUser);

module.exports = router;
