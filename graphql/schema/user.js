exports.UserSchema = `
type User {
    _id: ID!
    name: String!
    surname: String!
    ind: String!
    user_name: String!
    password: String!
    description: String
    roles: [Rol!]
    requests: [Request!]
    lots: [Lot!]
    outputs: [Output!]
}

type AuthData {
    userId: ID!
    token: String!
    tokenExpiration: Int!
}

input UserInput {
    name: String!
    surname: String!
    ind: String!
    user_name: String!
    password: String!
    description: String
}

input UserUpdate {
    _id: ID!
    name: String!
    surname: String!
    description: String
}

input PasswordInput {
    _id: ID!
    old_password: String!
    new_password: String!
}
`;

exports.UserQuery = `
user(_id: ID!): User
users(paginateInput: PaginateInput): [User!]
login(user_name: String!, password: String!): AuthData!
`;

exports.UserMutation = `
createUser(userInput: UserInput!): User!
updateUser(userUpdate: UserUpdate!): User!

updateIND(userId: ID!, ind: String!): User!
updateUserName(userId: ID!, user_name: String!): User!
updatePassword(passwordInput: PasswordInput!): User!
addRolToUser(userId: ID!, rolID: ID!): User!
`;
