exports.CategorySchema = `
type Category {
    _id: ID!
    name: String!
    products: [Product!]
    description: String
}

input CategoryInput {
    name: String!
    description: String
}

input CategoryUpdate {
    _id: ID!
    name: String!
    description: String
}
`;

exports.CategoryQuery = `
category(_id: ID!): Category
categories(paginateInput: PaginateInput): [Category!]
`;

exports.CategoryMutation = `
createCategory(categoryInput: CategoryInput!): Category!
updateCategory(categoryUpdate: CategoryUpdate!): Category!
`;
