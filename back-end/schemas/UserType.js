const { 
    GraphQLSchema,
    GraphQLObjectType, 
    GraphQLID, 
    GraphQLString, 
    GraphQLBoolean,
    GraphQLFloat,
    GraphQLList
} = require('graphql')

// MongoDB Models
const { User } = require('../models/User')
const { Event } = require('../models/Event')
const { Payment } = require('../models/Payment')
const { Name } = require('../models/Name')

// User Type
const UserType = (types) => new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: NameType,
            resolve(parent, args) {
                return Name.findById(parent.nameID)
            }
        },
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
        password: { type: GraphQLString },
        ppPath: { type: GraphQLString },
        friends: { 
            type: new GraphQLList(types.UserType),
            resolve(parent, args) {
                return User.find({ _id: { $in: parent.friendsID } })
            } 
        },
        events: { 
            type: new GraphQLList(types.EventType),
            resolve(parent, args) {
                return Event.find({ _id: { $in: parent.eventsID } })
            }
        },
        payments: { type: new GraphQLList(types.PaymentType),
            resolve(parent, args) {
                return Payment.find({ paidByUserID: parent.id })
            }
        },
        paymentsInvolved: { type: new GraphQLList(types.PaymentType),
            resolve(parent, args) {
                return Payment.find({ _id: { $in: parent.paymentsInvolvedID } })
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