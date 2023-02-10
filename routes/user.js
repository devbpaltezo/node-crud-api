const express = require('express');
const router = express.Router();
const user = require('../services/user');
const admin = require('../services/admin');

router.get('/', user.getAll);

router.get('/:id', user.read);

router.post('/', admin.authenticate, user.create);

router.put('/:id', admin.authenticate, user.update);

router.delete('/:id', admin.authenticate, user.remove);

router.patch('/bulk', admin.authenticate, user.bulkDelete);

//ADMIN
router.post('/admin/login', admin.login);

module.exports = router;