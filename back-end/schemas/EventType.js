const { 
    GraphQLObjectType, 
    GraphQLID, 
    GraphQLString, 
    GraphQLBoolean,
    GraphQLFloat,
    GraphQLList
} = require('graphql')

// MongoDB Models
const { Category } = require('../models/Category')
const { Payment } = require('../models/Payment')
const { Location } = require('../models/Location')

// Event Type
const EventType = (types) => new GraphQLObjectType({
    name: 'Event',
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        startDate: { type: GraphQLString },
        startTime: { type: GraphQLString },
        endDate: { type: GraphQLString },
        endTime: { type: GraphQLString },
        location: { type: LocationType,
            resolve(parent, args) {
                return Location.findById(parent.locationID)
            }
        },
        status: { type: GraphQLString },
        public: { type: GraphQLBoolean},
        users: { type: new GraphQLList(types.UserLinkedType) },
        category: { type: types.CategoryType,
            resolve(parent, args) {
                return Category.findById(parent.categoryID)
            }
        },
        payments: { 
            type: new GraphQLList(types.PaymentType),
            resolve(parent, args) {
                return Payment.find({ eventID: parent.id })
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