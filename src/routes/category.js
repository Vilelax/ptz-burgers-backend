const express = require('express');

const categoryController = require('../controllers/category');

const router = express.Router();

router.get('/', categoryController.index);

router.get('/:id', categoryController.show);

router.post('/create', categoryController.store);

router.put('/edit', categoryController.update);

router.delete('/delete/:id', categoryController.destroy);


module.exports = router;