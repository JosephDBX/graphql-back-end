exports.ToOrderSchema = `
type ToOrder {
    _id: ID!
    request: Request!
    department: String!
    type: String!
    order_date: DateTime!
    order_cost: Float
    days_term: Int!
    order_units: Int!
    unit_cost: Float
    demands: [Request!]
    lot: Lot
}

input ToOrderInput {
    request: ID!
    department: String!
    type: String!
    order_date: DateTime!
    order_cost: Float
    days_term: Int!
    order_units: Int!
    unit_cost: Float
}

input ToOrderUpdate {
    _id: ID!
    department: String!
    type: String!
    order_date: DateTime!
    order_cost: Float
    days_term: Int!
    order_units: Int!
    unit_cost: Float
}
`;

exports.ToOrderQuery = `
toOrder(_id: ID!): ToOrder
toOrders(paginateInput: PaginateInput): [ToOrder!]
`;

exports.ToOrderMutation = `
createToOrder(toOrderInput: ToOrderInput!): ToOrder!
updateToOrder(toOrderUpdate: ToOrderUpdate!): ToOrder!
updateToOrderDemands(_id:ID!, demands: [ID!]!): ToOrder!
`;
