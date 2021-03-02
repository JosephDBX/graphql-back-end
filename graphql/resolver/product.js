const { productMerge } = require('./merge');

const Product = require('../../model/product');
const Category = require('../../model/category');// validar category

module.exports = {
    product: ({ _id }, req) => {
        if (!req.isAuth) throw new Error('Unauthenticated!');
        return productMerge.getProduct(_id);
    },
    products: ({ paginateInput }, req) => {
        //if (!req.isAuth) throw new Error('Unauthenticated!');
        return Product.find().then(products => {
            return products.map(product => {
                return productMerge.transformProduct(product);
            })
        })
    },
    createProduct: ({ productInput }, req) => {
        //if (!req.isAuth) throw new Error('Unauthenticated!');
        let storedCategory;
        let storedProduct;
        productInput.category = "5d1f71915a204100040def64";
        return Category.findOne({ _id: productInput.category }).then(category => {
            if (!category) throw new Error('Category does not exist.');
            storedCategory = category;
            return Product.findOne({ name: productInput.name });
        }).then(product => {
            if (product) throw new Error('Product exists already.');
            let newProduct = new Product({
                ...productInput
            });
            return newProduct.save();
        }).then(product => {
            storedProduct = productMerge.transformProduct(product);
            storedCategory.products.push(storedProduct);
            return storedCategory.save();
        }).then(category => {
            return storedProduct;
        }).catch(err => {
            throw err;
        })
    },
    updateProduct: ({ productUpdate }, req) => {
        if (!req.isAuth) throw new Error('Unauthenticated!');
        return Product.findOne({ name: productUpdate.name }).then(product => {
            if (product) throw new Error('Product´s name exists already.');
            return Product.findById(productUpdate._id);
        }).then(product => {
            if (!product) throw new Error('Product does not exist.');
            product = {
                ...product,
                ...productUpdate
            }
            return product.save();
        }).then(product => {
            return productMerge.transformProduct(product);
        }).catch(err => {
            throw err;
        })
    },
    changeProductCategory: ({ productId, newCategory }, req) => {
        throw new Error('Not implemented.');
    }
}
