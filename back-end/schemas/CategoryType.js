const { 
    GraphQLObjectType, 
    GraphQLID, 
    GraphQLString, 
    GraphQLList
} = require('graphql')

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
                // code to get data from db / other source
            }
        }        
    })
})

module.exports = CategoryType