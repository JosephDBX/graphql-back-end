exports.OutputDetailSchema = `
type OutputDetail {
    _id: ID!
    lot: Lot!
    output: Output!
    units: Int!
}

input OutputDetailInput {
    lot: ID!
    output: ID!
    units: Int!
}

input OutputDetailUpdate {
    _id: ID!
    units: Int!
}
`;

exports.OutputDetailQuery = `
outputDetail(_id: ID!): OutputDetail
outputDetails(paginateInput: PaginateInput): [OutputDetail!]
`;

exports.OutputDetailMutation = `
createOutputDetail(outputDetailInput: OutputDetailInput!): OutputDetail!
updateOutputDetail(outputDetailUpdate: OutputDetailUpdate!): OutputDetail!
`;
