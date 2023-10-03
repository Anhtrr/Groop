const { 
    GraphQLObjectType, 
    GraphQLID, 
    GraphQLString, 
    GraphQLBoolean,
    GraphQLFloat,
    GraphQLList
} = require('graphql')

// MongoDB Models
const { User } = require('../models/User')

// UserLinked Type
const UserLinkedType = (types) => new GraphQLObjectType({
    name: 'UserLinked',
    fields: () => ({
        user: { type: types.UserType,
            resolve(parent, args) {
                return User.findById(parent.userID)
            }
        },
        status: { type: GraphQLString }
    })
})

module.exports = UserLinkedType