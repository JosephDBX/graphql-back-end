const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const { Material } = require('./material');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: { type: String, required: true },
    materials: [Material],
    direct_labor: { type: Number },
    ss: { type: Number },
    keep_cost: { type: Number },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    requests: [{
        type: Schema.Types.ObjectId,
        ref: 'Request'
    }],
    lots: [{
        type: Schema.Types.ObjectId,
        ref: 'Lot'
    }],
    description: { type: String }
});

productSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Product', productSchema);
