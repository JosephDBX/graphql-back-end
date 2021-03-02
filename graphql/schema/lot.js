exports.LotSchema = `
type Lot {
    _id: ID!
    grocer: User!
    product: Product!
    to_order: ToOrder!
    inputed_at: DateTime!
    units: Int!
    state: Boolean!
    output_datails: [OutputDetail!]
    description: String
}

input LotInput {
    grocer: ID!
    product: ID!
    to_order: ID!
    inputed_at: DateTime!
    units: Int!
    state: Boolean!
    description: String
}

input LotUpdate {
    _id: ID!
    inputed_at: DateTime!
    units: Int!
    state: Boolean!
    description: String
}
`;

exports.LotQuery = `
lot(_id: ID!): Lot
lots(paginateInput: PaginateInput): [Lot!]
`;

exports.LotMutation = `
createLot(lotInput: LotInput!): Lot!
updateLot(lotUpdate: LotUpdate!): Lot!
`;
