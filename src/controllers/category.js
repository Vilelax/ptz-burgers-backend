const Category = require('../models/category');

exports.index = async (req, res, next) => {
    const categories = await Category.find({});
    res.json(categories);
}

exports.show = async (req, res, next) => {
    const id = req.params.id;
    const category = await Category.findById(id);
    res.json(category);
}

exports.store = async (req, res, next) => {
    const name = req.body.name;
    const category = new Category({
        name: name
    });
    await category.save()
        .then(result => {
            console.log('Category created.');
            res.sendStatus(201);
        })
        .catch(err => {
            console.log(err);
        });
}

exports.update = async (req, res, next) => {
    const id = req.body.id;
    const name = req.body.name;
    await Category.findByIdAndUpdate(id, {
        name: name
    });
    res.sendStatus(200);
}

exports.destroy = async (req, res, next) => {
    const id = req.params.id;
    await Category.findByIdAndDelete(id);
    res.sendStatus(200);
}