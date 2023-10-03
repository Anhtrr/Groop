const { 
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLBoolean,
    GraphQLFloat,
    GraphQLID
} = require('graphql')

const LocationType = (types) => new GraphQLObjectType({
    name: 'Location',
    fields: () => ({
        id: { type: GraphQLID },
        address: { type: GraphQLString },
        online: { type: GraphQLBoolean },
        link: { type: GraphQLString },
        longitude: { type: GraphQLFloat },
        latitude: { type: GraphQLFloat }
    })
})

module.exports = LocationType