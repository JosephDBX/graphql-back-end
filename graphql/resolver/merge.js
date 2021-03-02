const User = require('../../model/user');
const Rol = require('../../model/rol');
const Request = require('../../model/request');
const Lot = require('../../model/lot');
const Output = require('../../model/output');
const Category = require('../../model/category');
const OutputDetail = require('../../model/output_detail');
const Product = require('../../model/product');
const ToOrder = require('../../model/to_order');

/*______________________________User______________________________*/

const getUser = _id => {
    return User.findById(_id).then(user => {
        return transformUser(user);
    });
}

const getUsers = _ids => {
    return User.find({ _id: { $in: _ids } }).then(users => {
        return users.map(user => {
            return transformUser(user);
        })
    })
}

const transformUser = user => {
    return {
        ...user._doc,
        roles: getRoles.bind(this, user._doc.roles),
        requests: getRequests.bind(this, user._doc.requests),
        lots: getLots.bind(this, user._doc.lots),
        outputs: getOutputs.bind(this, user._doc.outputs)
    }
}

exports.userMerge = {
    getUser,
    getUsers,
    transformUser
}

/*______________________________Rol______________________________*/

const getRol = _id => {
    return Rol.findById(_id).then(rol => {
        return transformRol(rol);
    })
}

const getRoles = _ids => {
    return Rol.find({ _id: { $in: _ids } }).then(roles => {
        return roles.map(rol => {
            return transformRol(rol);
        })
    })
}

const transformRol = rol => {
    return {
        ...rol._doc,
        users: getUsers.bind(this, rol._doc.users)
    }
}

exports.rolMerge = {
    getRol,
    getRoles,
    transformRol
}

/*______________________________Request______________________________*/

const getRequest = _id => {
    return Request.findById(_id).then(request => {
        return transformRequest(request);
    })
}

const getRequests = _ids => {
    return Request.find({ _id: { $in: _ids } }).then(requests => {
        return requests.map(request => {
            return transformRequest(request);
        })
    })
}

const transformRequest = request => {
    return {
        ...request._doc,
        requester: getUser.bind(this, request._doc.requester),
        product: getProduct.bind(this, request.product),
        to_order: getToOrder.bind(this, request._doc.to_order),
        output: getOutput.bind(this, request._doc.output)
    }
}

exports.requestMerge = {
    getRequest,
    getRequests,
    transformRequest
}

/*______________________________Lot______________________________*/

const getLot = _id => {
    return Lot.findById(_id).then(lot => {
        return transformLot(lot);
    })
}

const getLots = _ids => {
    return Lot.find({ _id: { $in: _ids } }).then(lots => {
        return lots.map(lot => {
            return transformLot(lot);
        })
    })
}

const transformLot = lot => {
    return {
        ...lot._doc,
        grocer: getUser.bind(this, lot._doc.grocer),
        product: getProduct.bind(this, lot._doc.product),
        to_order: getToOrder.bind(this, lot._doc.to_order),
        output_details: getOutputDetails.bind(this, lot._doc.output_details)
    }
}

exports.lotMerge = {
    getLot,
    getLots,
    transformLot
}

/*______________________________Output______________________________*/

const getOutput = _id => {
    return Output.findById(_id).then(output => {
        return transformOutput(output);
    })
}

const getOutputs = _ids => {
    return Output.find({ _id: { $in: _ids } }).then(outputs => {
        return outputs.map(output => {
            return transformOutput(output);
        })
    })
}

const transformOutput = output => {
    return {
        ...output._doc,
        grocer: getUser.bind(this, output._doc.grocer),
        request: getRequest.bind(this, output._doc.request),
        details: getOutputDetails.bind(this, output._doc.details)
    }
}

exports.outputMerge = {
    getOutput,
    getOutputs,
    transformOutput
}

/*______________________________Category______________________________*/

const getCategory = _id => {
    return Category.findById(_id).then(category => {
        return transformCategory(category);
    })
}

const getCategories = _ids => {
    return Category.find({ _id: { $in: _ids } }).then(categories => {
        return categories.map(category => {
            return transformCategory(category);
        })
    })
}

const transformCategory = category => {
    return {
        ...category._doc,
        products: getProducts.bind(this, category._doc.products)
    }
}

exports.categoryMerge = {
    getCategory,
    getCategories,
    transformCategory
}

/*______________________________OutputDetail______________________________*/

const getOutputDetail = _id => {
    return OutputDetail.findById(_id).then(outputDetail => {
        return transformOutputDetail(outputDetail);
    })
}

const getOutputDetails = _ids => {
    return OutputDetail.find({ _id: { $in: _ids } }).then(outputDetails => {
        return outputDetails.map(outputDetail => {
            return transformOutputDetail(outputDetail);
        })
    })
}

const transformOutputDetail = outputDetail => {
    return {
        ...outputDetail._doc,
        lot: getLot.bind(this, outputDetail._doc.lot),
        output: getOutput.bind(this, outputDetail._doc.output)
    }
}

exports.outputDetailMerge = {
    getOutputDetail,
    getOutputDetails,
    transformOutputDetail
}

/*______________________________Product______________________________*/

const getProduct = _id => {
    return Product.findById(_id).then(product => {
        return transformProduct(product);
    })
}

const getProducts = _ids => {
    return Product.find({ _id: { $in: _ids } }).then(products => {
        return products.map(product => {
            return transformProduct(product);
        })
    })
}

const transformProduct = product => {
    return {
        ...product._doc,
        materials: getMaterials.bind(this, product._doc.materials),
        category: getCategory.bind(this, product._doc.category),
        requests: getRequests.bind(this, product._doc.requests),
        lots: getLots.bind(this, product._doc.lots)
    }
}

const getMaterials = materials => {
    return materials.map(material => {
        return transformMaterial(material);
    })
}

const transformMaterial = material => {
    return {
        units: material.units,
        product: getProduct.bind(this, material.product),
        description: material.description
    }
}

exports.productMerge = {
    getProduct,
    getProducts,
    transformProduct
}

/*______________________________ToOrder______________________________*/

const getToOrder = _id => {
    return ToOrder.findById(_id).then(toOrder => {
        return transformToOrder(toOrder);
    })
}

const getToOrders = _ids => {
    return ToOrder.find({ _id: { $in: _ids } }).then(toOrders => {
        return toOrders.map(toOrder => {
            return transformToOrder(toOrder);
        })
    })
}

const transformToOrder = toOrder => {
    return {
        ...toOrder._doc,
        request: getRequest.bind(this, toOrder._doc.request),
        demands: getRequests.bind(this, toOrder._doc.demands),
        lot: getLot.bind(this, toOrder._doc.lot)
    }
}

exports.toOrderMerge = {
    getToOrder,
    getToOrders,
    transformToOrder
}
