exports.RolSchema = `
type Rol {
    _id: ID!
    name: String!
    users: [User!]
    description: String
}

input RolInput {
    name: String!
    description: String
}

input RolUpdate {
    _id: ID!
    name: String!
    description: String
}
`;

exports.RolQuery = `
rol(_id: ID!): Rol
roles(paginateInput: PaginateInput): [Rol!]
`;

exports.RolMutation = `
createRol(rolInput: RolInput!): Rol!
updateRol(rolUpdate: RolUpdate!): Rol!
`;
