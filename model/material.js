const mongoose = require('mongoose');
const Schema = mongoose.Schema;

exports.Material = {
    units: { type: Number },
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },
    description: { type: String }
}
