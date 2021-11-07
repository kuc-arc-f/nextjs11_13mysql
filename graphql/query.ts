
export const GQL_QUERY = `
  type Query {
    hello: String
    user(id: String): User
    users: [User]    
    userValid(email: String!, password: String!): User  
    userCount: Int  
    task(id: Int): Task
    tasks: [Task]
  }
`;