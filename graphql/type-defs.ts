import { gql, Config } from "apollo-server-micro";
import { GQL_QUERY } from "./query";
import { GQL_MUTATION } from "./mutation";

export const typeDefs: Config["typeDefs"] = gql`
  type User {
    id: String!
    name: String
    email: String
    password: String
  }  
  type Task {
    id: String
    title: String
    content: String!
    createdAt: String!
  }
  ${GQL_QUERY}
  ${GQL_MUTATION}
`;