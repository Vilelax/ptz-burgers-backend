const Product = require('../models/product');

exports.index = async (req, res, next) => {
    const category = req.query.category;
    let categoryFilter = {};
    if(category){
        categoryFilter = {category: category}
    }
    const product = await Product.find(categoryFilter);
    res.json(product);
}

exports.show = async (req, res, next) => {
    const id = req.params.id;
    const product = await Product.findById(id);
    res.json(product);
}

exports.store = async (req, res, next) => {
    const category = req.body.category;
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const image = req.body.image;
    const product = new Product({
        category: category,
        title: title,
        description: description,
        price: price,
        image: image
    });
    await product.save()
        .then(result => {
            console.log('Product created.');
            res.sendStatus(201);
        })
        .catch(err => {
            console.log(err);
        });
}

exports.update = async (req, res, next) => {
    const id = req.body.id;
    const category = req.body.category;
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const image = req.body.image;
    await Product.findByIdAndUpdate(id, {
        category: category,
        title: title,
        description: description,
        price: price,
        image: image,
    });
    res.sendStatus(200);
}

exports.destroy = async (req, res, next) => {
    const id = req.params.id;
    await Product.findByIdAndDelete(id);
    res.sendStatus(200);
}