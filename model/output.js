const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const Schema = mongoose.Schema;

const outputSchema = new Schema({
    grocer: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    request: {
        type: Schema.Types.ObjectId,
        ref: 'Request',
        required: true
    },
    datails: [{
        type: Schema.Types.ObjectId,
        ref: 'OutputDetail'
    },],
    outputed_at: { type: Date, default: Date.now(), required: true },
    description: { type: String }
});

outputSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Output', outputSchema);
