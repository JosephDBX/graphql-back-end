const { lotMerge } = require('./merge');

const Lot = require('../../model/lot');
const Grocer = require('../../model/user');
const Product = require('../../model/product');
const ToOrder = require('../../model/to_order');

module.exports = {
    lot: ({ _id }, req) => {
        if (!req.isAuth) throw new Error('Unauthenticated!');
        return lotMerge.getLot(_id);
    },
    lots: ({ paginateInput }, req) => {
        if (!req.isAuth) throw new Error('Unauthenticated!');
        return Lot.find().then(lots => {
            return lots.map(lot => {
                return lotMerge.transformLot(lot);
            })
        })
    },
    createLot: ({ lotInput }, req) => {
        if (!req.isAuth) throw new Error('Unauthenticated!');
        let grocerStored;
        let productStored;
        let toOrderStored;
        let storedLot;
        return Grocer.findById(lotInput.grocer).then(grocer => {
            if (!grocer) throw new Error('Grocer does not exist.');
            grocerStored = grocer;
            return Product.findById(lotInput.product);
        }).then(product => {
            if (!product) throw new Error('Product does not exist.');
            productStored = product;
            return ToOrder.findById(lotInput.to_order);
        }).then(toOrder => {
            if (!toOrder) throw new Error('ToOrder does not exist.');
            let lot = new Lot({
                ...lotInput
            });
            return lot.save();
        }).then(lot => {
            storedLot = lotMerge.transformLot(lot);
            grocerStored.lots.push(storedLot);
            return grocerStored.save();
        }).then(grocer => {
            productStored.lots.push(storedLot);
            return productStored.save();
        }).then(product => {
            toOrderStored.lot = storedLot;
            return toOrderStored.save();
        }).then(toOrder => {
            return storedLot;
        }).catch(err => {
            throw err;
        })
    },
    updateLot: ({ lotUpdate }, req) => {
        if (!req.isAuth) throw new Error('Unauthenticated!');
        return Lot.findById(lotUpdate._id).then(lot => {
            if (!lot) throw new Error('Lot does not exist.');
            lot = {
                ...lot,
                ...lotUpdate
            }
            return lot.save();
        }).then(lot => {
            return lotMerge.transformLot(lot);
        }).catch(err => {
            throw err;
        })
    }
}
