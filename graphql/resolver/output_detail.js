const { outputDetailMerge } = require('./merge');

const OutputDetail = require('../../model/output_detail');
const Lot = require('../../model/lot');
const Output = require('../../model/output');

module.exports = {
    outputDetail: (_id, req) => {
        if (!req.isAuth) throw new Error('Unauthenticated!');
        return outputDetailMerge.getOutputDetail(_id);
    },
    outputDetails: ({ paginateInput }, req) => {
        if (!req.isAuth) throw new Error('Unauthenticated!');
        return OutputDetail.find().then(outputDetails => {
            return outputDetails.map(outputDetail => {
                return outputDetailMerge.transformOutputDetail(outputDetail);
            })
        })
    },
    createOutputDetail: ({ outputDetailInput }, req) => {
        if (!req.isAuth) throw new Error('Unauthenticated!');
        let lotStored;
        let outputStored;
        let outputDetailStored;
        return Lot.findById(outputDetailInput.lot).then(lot => {
            if (!lot) throw new Error('Lot does not exist.');
            lotStored = lot;
            return Output.findById(outputDetailInput.output);
        }).then(output => {
            if (!output) throw new Error('Output does not exist.');
            outputStored = output;
            let newOutputDetail = new OutputDetail({
                ...outputDetailInput
            });
            return newOutputDetail.save();
        }).then(outputDetail => {
            outputDetailStored = outputDetailMerge.transformOutputDetail(outputDetail);
            lotStored.output_details.push(outputDetailStored);
            return lotStored.save();
        }).then(lot => {
            outputStored.details.push(outputDetailStored);
            return outputStored.save();
        }).then(output => {
            return outputDetailStored;
        }).catch(err => {
            throw err;
        })
    },
    updateOutputDetail: ({ outputDetailUpdate }, req) => {
        if (!req.isAuth) throw new Error('Unauthenticated!');
        return OutputDetail.findById(outputDetailUpdate._id).then(outputDetail => {
            if (!outputDetail) throw new Error('Output detail does not exist.');
            outputDetail = {
                ...outputDetail,
                ...outputDetailUpdate
            }
            return outputDetail.save();
        }).then(outputDetail => {
            return outputDetailMerge.transformOutputDetail(outputDetail);
        }).catch(err => {
            throw err;
        })
    }
}
