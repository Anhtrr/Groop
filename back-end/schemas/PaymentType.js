const { 
    GraphQLSchema,
    GraphQLObjectType, 
    GraphQLID, 
    GraphQLString, 
    GraphQLBoolean,
    GraphQLFloat,
    GraphQLList
} = require('graphql')

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
                // code to get data from db / other source
            }
        },
        paidBy: { type: types.UserType,
            resolve(parent, args) {
                // code to get data from db / other source
            }
        },
        splitTo: { type: new GraphQLList(types.SplitToType),
            resolve(parent, args) {
                // code to get data from db / other source
            }
        }
    })
})

module.exports = PaymentType 