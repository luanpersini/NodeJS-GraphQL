const { GraphQLServer } = require('graphql-yoga');
const path = require('path');
const mongoose = require('mongoose');
const resolvers = require('./resolvers');

const db = 'mongodb://localhost:27017/graphql';
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(`Connected to ${db}...`);
    
    const server = new GraphQLServer({
      typeDefs: path.resolve(__dirname, 'schema.graphql'),
      resolvers
    });

    server.start({ port: 3000 });
    console.log(`Running GraphQL Server...`);
  });