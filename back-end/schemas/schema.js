const { 
    GraphQLSchema,
    GraphQLObjectType, 
    GraphQLID, 
    GraphQLString, 
    GraphQLBoolean,
    GraphQLFloat,
    GraphQLList
} = require('graphql')

// GraphQL Types
const { EventType, UserType, PaymentType } = require('./types')

// Mongoose Models
const { Event } = require('../models/Event')
const { User } = require('../models/User')
const { UserLinked } = require('../models/UserLinked')
const { SplitTo } = require('../models/SplitTo')
const { Category } = require('../models/Category')
const { Location } = require('../models/Location')
const { Payment } = require('../models/Payment')
const { Name } = require('../models/Name')

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        /*
        *  EVENT QUERIES
        */

        // All Events
        events: {
            type: new GraphQLList(EventType),
            resolve(parent, args) {
                return Event.find()
            }
        },
        // Event by ID
        event: {
            type: EventType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Event.findById(args.id)
            }
        },

        /*
        *  USER QUERIES
        */

        // All Users
        users: {
            type: new GraphQLList(UserType),
            resolve(parent, args) {
                return User.find()
            }
        },
        // User by ID
        user: {
            type: UserType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return User.findById(args.id)
            }
        },

        /*
        *  PAYMENT QUERIES
        */

        // All Payments
        payments: {
            type: new GraphQLList(PaymentType),
            resolve(parent, args) {
                return Payment.find()
            }
        },
        // Payment by ID
        payment: {
            type: PaymentType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Payment.findById(args.id)
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})