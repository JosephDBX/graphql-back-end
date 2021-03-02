const { outputMerge } = require('./merge');

const Output = require('../../model/output');
const Grocer = require('../../model/user');
const Request = require('../../model/request');

module.exports = {
    output: ({ _id }, req) => {
        if (!req.isAuth) throw new Error('Unauthenticated!');
        return outputMerge.getOutput(_id);
    },
    outputs: ({ paginateInput }, req) => {
        if (!req.isAuth) throw new Error('Unauthenticated!');
        return Output.find().then(outputs => {
            return outputs.map(output => {
                return outputMerge.transformOutput(output);
            })
        })
    },
    createOutput: ({ outputInput }, req) => {
        if (!req.isAuth) throw new Error('Unauthenticated!');
        let grocerStored;
        let requestStored;
        let outputStored;
        return Grocer.findById(outputInput.grocer).then(grocer => {
            if (!grocer) throw new Error('Groser does not exist.');
            grocerStored = grocer;
            return Request.findById(outputInput.request);
        }).then(request => {
            if (!request) throw new Error('Request does not exist.');
            requestStored = request;
            let newOutput = new Output({
                ...outputInput
            });
            return newOutput.save();
        }).then(output => {
            outputStored = outputMerge.transformOutput(output);
            grocerStored.outputs.push(outputStored);
            return grocerStored.save();
        }).then(grocer => {
            requestStored.output = outputStored;
            return requestStored.save();
        }).then(request => {
            return outputStored;
        }).catch(err => {
            throw err;
        })
    },
    updateOutput: ({ outputUpdate }, req) => {
        if (!req.isAuth) throw new Error('Unauthenticated!');
        return Output.findById(outputUpdate._id).then(output => {
            if (!output) throw new Error('Output does not exist.');
            output = {
                ...output,
                ...outputUpdate
            }
            return output.save();
        }).then(output => {
            return outputMerge.transformOutput(output);
        }).catch(err => {
            throw err;
        })
    }
}
