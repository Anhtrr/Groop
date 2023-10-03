const { 
    GraphQLObjectType, 
    GraphQLID, 
    GraphQLString, 
    GraphQLList
} = require('graphql')

// MongoDB Models
const { Event } = require('../models/Event')

// Category Type
const CategoryType = (types) => new GraphQLObjectType({
    name: 'Category',
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        picturePath: { type: GraphQLString },
        events: { 
            type: new GraphQLList(types.EventType),
            resolve(parent, args) {
                return Event.find({ categoryID: parent.id })
            }
        }        
    })
})

module.exports = CategoryType