// this file connects to the remote prisma DB and gives us the ability to query the graphql.
const { Prisma } = require('prisma-binding')

const db = new Prisma({
    typeDefs: 'src/generate/prisma.graphql',
    endpoint: process.env.PRISMA_ENDPOINT,
    secret: process.env.PRISMA_SECRET,
    debug: false,

});

module.exports = db;