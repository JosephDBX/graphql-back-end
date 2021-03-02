exports.RequestSchema = `
type Request {
    _id: ID!
    requester: User!
    product: Product!
    units: Int!
    to_order: ToOrder
    requested_to: DateTime!
    output: Output
    state: String!
    description: String
}

input RequestInput {
    requester: ID!
    product: ID!
    units: Int!
    requested_to: DateTime!
    state: String!
    description: String
}

input RequestUpdate {
    _id: ID!
    units: Int!
    requested_to: DateTime!
    state: String!
    description: String
}
`;

exports.RequestQuery = `
request(_id: ID!): Request
requests(paginateInput: PaginateInput): [Request!]
`;

exports.RequestMutation = `
createRequest(requestInput: RequestInput!): Request!
updateRequest(requestUpdate: RequestUpdate!): Request!
`;
