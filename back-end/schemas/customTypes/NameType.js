const { 
    GraphQLObjectType, 
    GraphQLString,
    GraphQLID
} = require('graphql')


const NameType = (types) => new GraphQLObjectType({
    name: 'Name',
    fields: () => ({
        id: { type: GraphQLID },
        first: { type: GraphQLString },
        last: { type: GraphQLString },
        full: { type: GraphQLString }
    })
})

module.exports = NameType
