
export const GQL_QUERY = `
  type Query {
    hello: String
    user(id: String): User
    users: [User]    
    userValid(email: String!, password: String!): User  
    userCount: Int  
    task(id: String): Task
    tasks: [Task] 
  }
`;