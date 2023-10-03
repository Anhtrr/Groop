const { 
    GraphQLSchema,
    GraphQLObjectType, 
    GraphQLID, 
    GraphQLString, 
    GraphQLBoolean,
    GraphQLFloat,
    GraphQLList,
    GraphQLInputObjectType
} = require('graphql')

const NameInput = new GraphQLInputObjectType({
    name: 'NameInput',
    fields: () => ({
        first: { type: GraphQLString },
        last: { type: GraphQLString }
    })
})

const LocationInput = new GraphQLInputObjectType({
    name: 'LocationInput',
    fields: () => ({
        address: { type: GraphQLString },
        online: { type: GraphQLBoolean },
        link: { type: GraphQLString },
        longitude: { type: GraphQLFloat },
        latitude: { type: GraphQLFloat }
    })
})

module.exports = { 
    NameInput,
    LocationInput
}
