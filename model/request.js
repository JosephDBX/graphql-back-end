const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const { ToOrder } = require('./to_order');

const Schema = mongoose.Schema;

const requestSchema = new Schema({
    requester: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    units: { type: Number, required: true },
    to_order: {
        type: Schema.Types.ObjectId,
        ref: 'ToOrder'
    },
    requested_to: { type: Date, required: true },
    output: {
        type: Schema.Types.ObjectId,
        ref: 'Output'
    },
    state: { type: String, enum: ['Wait', 'Process', 'Satisfied', 'Canceled'], default: 'Wait', required: true },
    description: { type: String }
});

requestSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Request', requestSchema);
