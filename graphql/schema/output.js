exports.OutputSchema = `
type Output {
    _id: ID!
    grocer: User!
    request: Request!
    details: [OutputDetail!]
    outputed_at: DateTime!
    description: String
}

input OutputInput {
    grocer: ID!
    request: ID!
    outputed_at: DateTime!
    description: String
}

input OutputUpdate {
    _id: ID!
    outputed_at: DateTime!
    description: String
}
`;

exports.OutputQuery = `
output(_id: ID!): Output
outputs(paginateInput: PaginateInput): [Output!]
`;

exports.OutputMutation = `
createOutput(outputInput: OutputInput!): Output!
updateOutput(outputUpdate: OutputUpdate!): Output!
`;
