const express = require('express');
const app = express();

app.use(express.json());

const { graphqlHTTP } = require('express-graphql');
const graphqlSchema = require('./graphql/schema');
const graphqlResolver = require('./graphql/resolver');

// add middleware
app.use(
  '/api/grap',
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true,
  })
);

app.listen(8080);
