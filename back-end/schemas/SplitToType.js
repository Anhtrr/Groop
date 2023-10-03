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
const { Payment } = require('../models/Payment')

// SplitTo Type
const SplitToType = (types) => new GraphQLObjectType({
    name: 'SplitTo',
    fields: () => ({
        user: { type: types.UserType,
            resolve(parent, args) {
                return User.findById(parent.userID)
            }
        },
        payment: {type: types.PaymentType,
            resolve(parent, args) {
                return Payment.findById(parent.paymentID)
            }
        },
        amount: { type: GraphQLFloat },
        resolved: { type: GraphQLBoolean }
    })
})

module.exports = SplitToType