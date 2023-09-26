const { 
    GraphQLObjectType, 
    GraphQLID, 
    GraphQLString, 
    GraphQLBoolean,
    GraphQLFloat,
    GraphQLList
} = require('graphql')

// Event Type
const EventType = new GraphQLObjectType({
    name: 'Event',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        category: { type: GraphQLString },
        description: { type: GraphQLString },
        startDate: { type: GraphQLString },
        startTime: { type: GraphQLString },
        endDate: { type: GraphQLString },
        endTime: { type: GraphQLString },
        location: { 
            address: { type: GraphQLString },
            online: { type: GraphQLBoolean },
            link: { type: GraphQLString },
            longitude: { type: GraphQLFloat },
            latitude: { type: GraphQLFloat }
        },
        status: { type: GraphQLString },
        users: { 
            type: new GraphQLList({
                user: { type: UserType },
                status: { type: GraphQLString }
            }) 
        },
        payments: { type: new GraphQLList(PaymentType) }
    })
})

// User Type
const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLID },
        name: {
            first: { type: GraphQLString },
            last: { type: GraphQLString },
            full: first + last
        },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
        password: { type: GraphQLString },
        ppPath: { type: GraphQLString },
        friends: { type: new GraphQLList(UserType) },
        events: { type: new GraphQLList(EventType) },
        payments: { type: new GraphQLList(PaymentType) }
    })
})

// Payment Type
const PaymentType = new GraphQLObjectType({
    name: 'Payment',
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        desc: { type: GraphQLString },
        totalAmount: { type: GraphQLFloat },
        currency: { type: GraphQLString },
        paidBy: { type: UserType },
        splitTo: { 
            type: new GraphQLList({
                user: { type: UserType },
                amount: { type: GraphQLFloat },
                resolved: { type: GraphQLBoolean }
            }) 
        },
        date: { type: GraphQLString },
        time: { type: GraphQLString },
        event: { type: EventType }
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        // Events
        events: {
            type: new GraphQLList(EventType),
            resolve(parent, args) {
                // code to get data from db / other source
            }
        },
        // Singular Event
        event: {
            type: EventType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                // code to get data from db / other source
            }
        }
    }
})
