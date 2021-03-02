const { requestMerge } = require('./merge');

const Request = require('../../model/request');
const Requester = require('../../model/user');
const Product = require('../../model/product');

module.exports = {
    request: ({ _id }, req) => {
        if (!req.isAuth) throw new Error('Unauthenticated!');
        return requestMerge.getRequest(_id);
    },
    requests: ({ paginateInput }, req) => {
        if (!req.isAuth) throw new Error('Unauthenticated!');
        return Request.find().then(requests => {
            requests.map(request => {
                return requestMerge.transformRequest(request);
            })
        })
    },
    createRequest: ({ requestInput }, req) => {
        //if (!req.isAuth) throw new Error('Unauthenticated!');
        let requesterStored;
        let productStored;
        let requestStored;
        return Requester.findById(requestInput.requester).then(requester => {
            if (!requester) throw new Error('Requester does not exist.');
            requesterStored = requester;
            return Product.findById(requestInput.product);
        }).then(product => {
            productStored = product;
            let newRequest = new Request({
                ...requestInput
            });
            return newRequest.save();
        }).then(request => {
            requestStored = requestMerge.transformRequest(request);
            requesterStored.requests.push(requestStored);
            return requesterStored.save();
        }).then(requester => {
            productStored.requests.push(requestStored);
            return productStored.save();
        }).then(product => {
            return requestStored;
        }).catch(err => {
            throw err;
        })
    },
    updateRequest: ({ requestUpdate }, req) => {
        if (!req.isAuth) throw new Error('Unauthenticated!');
        return Request.findById(requestUpdate._id).then(request => {
            if (!request) throw new Error('Request does not exist.');
            request = {
                ...request,
                ...requestUpdate
            }
            return request.save();
        }).then(request => {
            return requestMerge.transformRequest(request);
        }).catch(err => {
            throw err;
        })
    }
}
