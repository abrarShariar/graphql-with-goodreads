const fetch = require('node-fetch');
const util = require('util');
const parseXML = util.promisify(require('xml2js').parseString);
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt
} = require('graphql');
// const goodreadAPI = {
//   author: `https://www.goodreads.com/author/show.xml?id=4432&key=${process.env.API_KEY}`
// }
//
// // returns the author list
// fetch(goodreadAPI.author)
//   .then(res => res.text())
//   .then(parseXML)



const AuthorType = new GraphQLObjectType ({
  name: 'Author',
  description: '...',

  fields: () => ({
    name: {
      type: GraphQLString
    }
  })
})


module.exports = new GraphQLSchema ({
  query: new GraphQLObjectType ({
    name: 'Query',
    description: '...',

    fields: () => ({
      author: {
        type: AuthorType,
        args: {
          id: { type: GraphQLInt }
        }
      }
    })
  })
})
