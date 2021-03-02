const { categoryMerge } = require('./merge');

const Category = require('../../model/category');

module.exports = {
    category: ({ _id }, req) => {
        if (!req.isAuth) throw new Error('Unauthenticated!');
        return categoryMerge.getCategory(_id);
    },
    categories: ({ paginateInput }, req) => {
        if (!req.isAuth) throw new Error('Unauthenticated!');
        return Category.find().then(categories => {
            return categories.map(category => {
                return categoryMerge.transformCategory(category);
            })
        })
    },
    createCategory: ({ categoryInput }, req) => {
        //if (!req.isAuth) throw new Error('Unauthenticated!');
        return Category.findOne({ name: categoryInput.name }).then(category => {
            if (category) throw new Error('Category exists already.');
            let newCategory = new Category({
                ...categoryInput
            });
            return newCategory.save();
        }).then(category => {
            return categoryMerge.transformCategory(category);
        }).catch(err => {
            throw err;
        })
    },
    updateCategory: ({ categoryUpdate }, req) => {
        if (!req.isAuth) throw new Error('Unauthenticated!');
        return Category.findOne({ name: categoryUpdate.name }).then(category => {
            if (category) throw new Error('Category´s name exists already.');
            return Category.findById(categoryUpdate._id);
        }).then(category => {
            category = {
                ...category,
                ...categoryUpdate
            }
            return category.save();
        }).then(category => {
            return categoryMerge.transformCategory(category);
        }).catch(err => {
            throw err;
        })
    }
}
