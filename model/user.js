const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const { Person } = require('./person');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    ...Person,
    user_name: { type: String, required: true },
    password: { type: String, required: true },
    roles: [{
        type: Schema.Types.ObjectId,
        ref: 'Rol'
    }],
    requests: [{
        type: Schema.Types.ObjectId,
        ref: 'Request'
    }],
    lots: [{
        type: Schema.Types.ObjectId,
        ref: 'Lot'
    }],
    outputs: [{
        type: Schema.Types.ObjectId,
        ref: 'Output'
    }]
});

userSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('User', userSchema);
