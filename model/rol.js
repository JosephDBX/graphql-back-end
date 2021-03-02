const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const Schema = mongoose.Schema;

const rolSchema = new Schema({
    name: { type: String, required: true },
    users: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    description: { type: String }
});

rolSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Rol', rolSchema);
