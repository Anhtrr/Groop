const { 
    GraphQLSchema,
    GraphQLObjectType, 
    GraphQLID, 
    GraphQLString, 
    GraphQLBoolean,
    GraphQLFloat,
    GraphQLList
} = require('graphql')

// User Type
const UserType = (types) => new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: NameType },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
        password: { type: GraphQLString },
        ppPath: { type: GraphQLString },
        friends: { 
            type: new GraphQLList(types.UserType),
            resolve(parent, args) {
                // code to get data from db / other source
            } 
        },
        events: { 
            type: new GraphQLList(types.EventType),
            resolve(parent, args) {
                // code to get data from db / other source
            }
        },
        payments: { type: new GraphQLList(types.PaymentType),
            resolve(parent, args) {
                // code to get data from db / other source
            }
        }
    })
})
const NameType = new GraphQLObjectType({
    name: 'Name',
    fields: () => ({
        first: { type: GraphQLString },
        last: { type: GraphQLString },
        full: { type: GraphQLString }
    })
})

module.exports = UserType