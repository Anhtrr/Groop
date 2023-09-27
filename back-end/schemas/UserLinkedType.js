const { 
    GraphQLObjectType, 
    GraphQLID, 
    GraphQLString, 
    GraphQLBoolean,
    GraphQLFloat,
    GraphQLList
} = require('graphql')

// UserLinked Type
const UserLinkedType = (types) => new GraphQLObjectType({
    name: 'UserLinked',
    fields: () => ({
        user: { type: types.UserType,
            resolve(parent, args) {
                // code to get data from db / other source
            }
        },
        status: { type: GraphQLString }
    })
})

module.exports = UserLinkedType