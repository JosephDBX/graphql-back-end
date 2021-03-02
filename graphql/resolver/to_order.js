const { toOrderMerge, requestMerge } = require('./merge');

const ToOrder = require('../../model/to_order');
const Request = require('../../model/request');

module.exports = {
    toOrder: ({ _id }, req) => {
        if (!req.isAuth) throw new Error('Unauthenticated!');
        return toOrderMerge.getToOrder(_id);
    },
    toOrders: ({ paginateInput }, req) => {
        if (!req.isAuth) throw new Error('Unauthenticated!');
        return ToOrder.find().then(toOrders => {
            return toOrders.map(toOrder => {
                return toOrderMerge.transformToOrder(toOrder);
            })
        })
    },
    createToOrder: ({ toOrderInput }, req) => {
        //if (!req.isAuth) throw new Error('Unauthenticated!');
        let requestStored;
        let toOrderStored;
        return Request.findById(toOrderInput.request).then(request => {
            if (!request) throw new Error('Request does not exist.');
            requestStored = request;
            let newToOrder = new ToOrder({
                ...toOrderInput
            });
            return newToOrder.save();
        }).then(toOrder => {
            toOrderStored = toOrderMerge.transformToOrder(toOrder);
            requestStored.to_order = toOrderStored;
            return requestStored.save();
        }).then(request => {
            return toOrderStored;
        }).catch(err => {
            throw err;
        })
    },
    updateToOrder: ({ toOrderUpdate }, req) => {
        if (!req.isAuth) throw new Error('Unauthenticated!');
        return ToOrder.findById(toOrderUpdate._id).then(toOrder => {
            if (!toOrder) throw new Error('To order does not exist.');
            toOrder = {
                ...toOrder,
                ...toOrderUpdate
            }
            return toOrder.save();
        }).then(toOrder => {
            return toOrderMerge.transformToOrder(toOrder);
        }).catch(err => {
            throw err;
        })
    },
    updateToOrderDemands: ({ _id, demands }, req) => {
        //if (!req.isAuth) throw new Error('Unauthenticated!');
        let toOrderStored;
        return ToOrder.findById(_id).then(toOrder => {
            if (!toOrder) throw new Error('To order does not exist.');
            toOrderStored = toOrder;
            return Request.find({ _id: { $in: demands } });
        }).then(requests => {
            toOrderStored.demands.push(...requests);
            return toOrderStored.save();
        }).then(toOrder => {
            return toOrderMerge.transformToOrder(toOrder);
        }).catch(err => {
            throw err;
        })
    }
}
