const { 
    GraphQLSchema,
    GraphQLObjectType, 
    GraphQLID, 
    GraphQLString, 
    GraphQLBoolean,
    GraphQLFloat,
    GraphQLList
} = require('graphql')

// SplitTo Type
const SplitToType = (types) => new GraphQLObjectType({
    name: 'SplitTo',
    fields: () => ({
        user: { type: types.UserType,
            resolve(parent, args) {
                // code to get data from db / other source
            }
        },
        amount: { type: GraphQLFloat },
        resolved: { type: GraphQLBoolean }
    })
})

module.exports = SplitToType