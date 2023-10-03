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
const { Event } = require('../../models/Event')
const { SplitTo } = require('../../models/SplitTo')
const { User } = require('../../models/User')

// Payment Type
const PaymentType = (types) => new GraphQLObjectType({
    name: 'Payment',
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        desc: { type: GraphQLString },
        totalAmount: { type: GraphQLFloat },
        currency: { type: GraphQLString },
        date: { type: GraphQLString },
        time: { type: GraphQLString },
        event: { type: types.EventType,
            resolve(parent, args) {
                return Event.findById(parent.eventID)
            }
        },
        paidBy: { type: types.UserType,
            resolve(parent, args) {
                return User.findById(parent.paidByUserID)
            }
        },
        splitTo: { type: new GraphQLList(types.SplitToType),
            resolve(parent, args) {
                return SplitTo.find({ paymentID: parent.id })
            }
        }
    })
})

module.exports = PaymentType 