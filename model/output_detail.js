const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const Schema = mongoose.Schema;

const outputDetailSchema = new Schema({
    lot: {
        type: Schema.Types.ObjectId,
        ref: 'Lot',
        required: true
    },
    output: {
        type: Schema.Types.ObjectId,
        ref: 'Output',
        required: true
    },
    units: { type: Number, required: true }
});

outputDetailSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('OutputDetail', outputDetailSchema);
