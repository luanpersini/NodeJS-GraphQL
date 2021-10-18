const User = require('./user.model')
module.exports = {
  Query: {
    users: User.find(),
    user: (_, {id}) => User.findById(id)
  },
  Mutation: {
    createUser: (_, {name, email, phone}) => {
      return User.create ({name, email, phone})
    }
  }
}