const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const Schema = mongoose.Schema;

const lotSchema = new Schema({
    grocer: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    to_order: {
        type: Schema.Types.ObjectId,
        ref: 'ToOrder',
        required: true
    },
    inputed_at: { type: Date, default: Date.now(), required: true },
    units: { type: Number, required: true },
    state: { type: Boolean, default: true },
    output_details: [{
        type: Schema.Types.ObjectId,
        ref: 'OutputDetail'
    }],
    description: { type: String }
});

lotSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Lot', lotSchema);
