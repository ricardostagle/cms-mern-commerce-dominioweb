const { Router } = require('express');
const userController = require('../controllers/userControllers');
const router = Router();

router.get('/users', userController.get_users);
router.post('/users', userController.post_user);
router.put('/users/:id', userController.update_user);
router.delete('/users/:id', userController.delete_user);

module.exports = router;