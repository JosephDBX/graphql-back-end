const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const Schema = mongoose.Schema;

const toOrderSchema = new Schema({
    request: {
        type: Schema.Types.ObjectId,
        ref: 'Request',
        required: true
    },
    department: { type: String, enum: ['Production', 'Purchase'], default: 'Purchase', required: true },
    type: { type: String, enum: ['Q', 'L4L', 'LTC', 'LUC'], default: 'L4L', required: true },
    order_date: { type: Date, required: true },
    order_cost: { type: Number },
    days_term: { type: Number, required: true },
    order_units: { type: Number, required: true },
    unit_cost: { type: Number },
    demands: [{
        type: Schema.Types.ObjectId,
        ref: 'Request'
    }],
    lot: {
        type: Schema.Types.ObjectId,
        ref: 'Lot'
    }
});

toOrderSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('ToOrder', toOrderSchema);
