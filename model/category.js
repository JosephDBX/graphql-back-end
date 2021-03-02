const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: { type: String, required: true },
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }],
    description: { type: String }
});

categorySchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Category', categorySchema);
