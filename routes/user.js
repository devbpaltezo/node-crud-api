const express = require('express');
const router = express.Router();
const user = require('../services/user');

router.get('/', user.getAll);

router.post('/', user.create);

router.get('/:id', user.read);

router.put('/:id', user.update);

router.delete('/:id', user.remove);

router.delete('/bulk', user.bulkDelete);

module.exports = router;