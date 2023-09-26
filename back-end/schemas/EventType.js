const { 
    GraphQLObjectType, 
    GraphQLID, 
    GraphQLString, 
    GraphQLBoolean,
    GraphQLFloat,
    GraphQLList
} = require('graphql')

// Event Type
const EventType = (types) => new GraphQLObjectType({
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
        location: { type: LocationType },
        status: { type: GraphQLString },
        users: { type: new GraphQLList(types.UserLinkedType) },
        payments: { 
            type: new GraphQLList(types.PaymentType),
            resolve(parent, args) {
                // code to get data from db / other source
            }
        }
    })
})
const LocationType = new GraphQLObjectType({
    name: 'Location',
    fields: () => ({
        address: { type: GraphQLString },
        online: { type: GraphQLBoolean },
        link: { type: GraphQLString },
        longitude: { type: GraphQLFloat },
        latitude: { type: GraphQLFloat }
    })
})



module.exports = EventType