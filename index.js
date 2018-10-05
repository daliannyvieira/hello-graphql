const { ApolloServer, gql } = require('apollo-server');

const typeDefs = `
  type Organization {
    id: ID!
    name: String
    email: String
    website: String
    description: String
    birthday: String
    avatar: String
    location: Location
  }

  type Location {
    id: ID!
    street: String!
    number: Int!
    zipCode: String
    city: String!
    country: String
  }  

  type Volunteer {
    id: ID!
    email: String
    name: String
    description: String
    birthday: String
    avatar: String
    location: Location
  }

  type Query {
    organizations: [Organization]
    volunteers: [Volunteer]
  }
`;

const organizations = [
  {
    "id": 1,
    "name": "Precisaser",
    "location": {
      "id": 2,
      "street": "Rua Ana Camarão",
      "number": 111,
      "zipCode": "11111-000",
      "city": "São Gonçalo",
      "country": "Brazil"
    }
  },
  {
    "id": 2,
    "name": "Reciclação",
    "location": {
      "id": 2,
      "street": "Morro dos Prazeres",
      "number": 111,
      "zipCode": "11111-000",
      "city": "Rio de Janeiro",
      "country": "Brazil"
    }
  }
];

const resolvers = {
  Query: {
    organizations: (root, args, context) => {
      return organizations;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});


server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});