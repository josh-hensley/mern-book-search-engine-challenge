const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]!
  }

  type Book {
    bookId: String!
    authors: [String]
    description: String
    title: String!
    image: String
  }

  input BookInput {
    bookId: String!
    title: String!
    authors: [String]
    description: String
    image: String
  }

  input UserInput {
    username: String!
    email: String!
    password: String!
  }
  
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(input: UserInput!): Auth
    login(email: String!, password: String!): Auth
    saveBook(input: BookInput!): User
    deleteBook(bookId: String!): User
  }
`;

export default typeDefs;
