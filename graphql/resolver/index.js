const { GraphQLScalarType } = require('graphql');

const category = require('./category');
const lot = require('./lot');
const output = require('./output');
const output_detail = require('./output_detail');
const product = require('./product');
const request = require('./request');
const rol = require('./rol');
const to_order = require('./to_order');
const user = require('./user');

const rootResolver = {
    ...category,
    ...lot,
    ...output,
    ...output_detail,
    ...product,
    ...request,
    ...rol,
    ...to_order,
    ...user
};

module.exports = rootResolver;
