

class UserRepository {
  users = []

  findByUserName(username) {
    // INSERT INTO USERS WHERE USERNAME = '' LIMIT 1
    const userExists = this.users.find((user) => user.username === username)
    return userExists
  }

  save(user) {
    // INSERT INTO USERS(USERNAME, NAME) VALUES('', '')
    const id = Math.random().toString();
    const userWithId = {
      ...user,
      id,
    }
    this.users.push(userWithId)
    return userWithId
  }
}

export default new UserRepository