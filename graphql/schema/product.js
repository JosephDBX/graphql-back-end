exports.ProductSchema = `
type Material {
    units: Int!
    product: Product!
    description: String
}

type Product {
    _id: ID!
    name: String!
    materials: [Material!]
    direct_labor: Float
    ss: Int
    keep_cost: Float
    category: Category
    requests: [Request!]
    lots: [Lot!]
    description: String
}

input MaterialInput {
    units: Int!
    product: ID!
    description: String
}

input ProductInput {
    name: String!
    materials: [MaterialInput!]
    direct_labor: Float
    ss: Int
    keep_cost: Float
    category: ID
    description: String
}

input ProductUpdate {
    _id: ID!
    name: String!
    materials: [ID!]!
    direct_labor: Float
    ss: Int
    keep_cost: Float
    description: String
}
`;

exports.ProductQuery = `
product(_id: ID!): Product
products(paginateInput: PaginateInput): [Product!]
`;

exports.ProductMutation = `
createProduct(productInput: ProductInput!): Product!
updateProduct(productUpdate: ProductUpdate!): Product!
changeProductCategory(productId: ID!, newCategory: ID!): Product!
`;
