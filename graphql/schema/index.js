const { buildSchema } = require('graphql');

const { UserSchema, UserQuery, UserMutation } = require('./user');
const { RolSchema, RolQuery, RolMutation } = require('./rol');
const { CategorySchema, CategoryQuery, CategoryMutation } = require('./category');
const { ProductSchema, ProductQuery, ProductMutation } = require('./product');
const { LotSchema, LotQuery, LotMutation } = require('./lot');
const { OutputSchema, OutputQuery, OutputMutation } = require('./output');
const { OutputDetailSchema, OutputDetailQuery, OutputDetailMutation } = require('./output_datail');
const { RequestSchema, RequestQuery, RequestMutation } = require('./request');
const { ToOrderSchema, ToOrderQuery, ToOrderMutation } = require('./to_order');

module.exports = buildSchema(`
scalar DateTime

${UserSchema}
${RolSchema}
${CategorySchema}
${ProductSchema}
${LotSchema}
${OutputSchema}
${RequestSchema}
${OutputDetailSchema}
${ToOrderSchema}

input PaginateInput {
    page: Int!
    limit: Int!
}

type RootQuery {
    ${UserQuery}
    ${RolQuery}
    ${CategoryQuery}
    ${ProductQuery}
    ${LotQuery}
    ${OutputQuery}
    ${RequestQuery}
    ${OutputDetailQuery}
    ${ToOrderQuery}
}

type RootMutation {
    ${UserMutation}
    ${RolMutation}
    ${CategoryMutation}
    ${ProductMutation}
    ${LotMutation}
    ${OutputMutation}
    ${RequestMutation}
    ${OutputDetailMutation}
    ${ToOrderMutation}
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`);
