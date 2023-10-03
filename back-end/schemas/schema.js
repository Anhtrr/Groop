// GraphQL imports
const { 
    GraphQLSchema,
    GraphQLObjectType, 
    GraphQLID, 
    GraphQLString, 
    GraphQLBoolean,
    GraphQLFloat,
    GraphQLList,
    GraphQLNonNull
} = require('graphql')

// GraphQL custom types
const { UserType, 
    EventType, 
    UserLinkedType, 
    PaymentType, 
    SplitToType, 
    CategoryType, 
    NameType,
    LocationType
} = require('./customTypes/types')

// Mongoose Models
const { Event } = require('../models/Event')
const { User } = require('../models/User')
const { UserLinked } = require('../models/UserLinked')
const { SplitTo } = require('../models/SplitTo')
const { Category } = require('../models/Category')
const { Location } = require('../models/Location')
const { Payment } = require('../models/Payment')
const { Name } = require('../models/Name')
const { NameInput, LocationInput } = require('./customTypes/inputTypes')

// Queries
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

// Mutations
const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        // Add User
        addUser: {
            type: UserType,
            args: {
                name: { type: NameInput},
                username: { type: GraphQLString },
                email: { type: GraphQLString },
                phone: { type: GraphQLString },
                password: { type: GraphQLString },
                ppPath: { type: GraphQLString }
            },
            async resolve(parent, args){
                let name = new Name({
                    first: args.name.first,
                    last: args.name.last,
                    full: args.name.first + ' ' + args.name.last
                })
                const usersName = await name.save()
                let user = new User({
                    nameID: usersName._id,
                    username: args.username,
                    email: args.email,
                    phone: args.phone,
                    password: args.password,
                    ppPath: '/images/pp/default.png',
                    friendsID: [],
                    eventsID: [],
                    paymentsID: [],
                    paymentsInvolvedID: []
                })
                return user.save()
            }
        },
        
        // // Add Event
        // addEvent: {
        //     type: EventType,
        //     args: {
        //         title: { type: GraphQLString },
        //         description: { type: GraphQLString },
        //         startDate: { type: GraphQLString },
        //         startTime: { type: GraphQLString },
        //         endDate: { type: GraphQLString },
        //         endTime: { type: GraphQLString },
        //         location: { type: LocationInput },
        //         status: { type: GraphQLString },
        //         public: { type: GraphQLBoolean },
        //         users: { type: new GraphQLList(UserLinkedType) },
        //         category: { type: CategoryType }
        //     },
        // }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation
})