const { 
    GraphQLSchema,
    GraphQLObjectType, 
    GraphQLID, 
    GraphQLString, 
    GraphQLBoolean,
    GraphQLFloat,
    GraphQLList
} = require('graphql')
const { events, users, payments } = require('./sampleData')
const { EventType, UserType, PaymentType } = require('./types')

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {

        // Events
        events: {
            type: new GraphQLList(EventType),
            resolve(parent, args) {
                return events
            }
        },

        // Singular Event
        event: {
            type: EventType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                // code to get data from db / other source
                return events.find((event) => event.id === args.id)
            }
        },

        // Users
        users: {
            type: new GraphQLList(UserType),
            resolve(parent, args) {
                return users
            }
        },

        // Singular User
        user: {
            type: UserType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                // code to get data from db / other source
                return users.find((user) => user.id === args.id)
            }
        },
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})