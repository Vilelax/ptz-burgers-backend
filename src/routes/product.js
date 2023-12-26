const express = require('express');
const productController = require('../controllers/product');

const router = express.Router();

router.get('/', productController.index);

router.get('/:id', productController.show);

router.post('/create', productController.store);

router.put('/edit', productController.update);

router.delete('/delete/:id', productController.destroy);

module.exports = router;