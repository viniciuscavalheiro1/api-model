import UserRepository from "../repositories/user.repository.js"


class CreateUserService {

  execute(data) {
    /*
      username
      name
      id
    */

    if(!data.username) {
      throw new Error("Username é obrigatório")
    }

    const userRepository = UserRepository

    // verify user name is created
    const existUser = userRepository.findByUserName(data.username)

    if(existUser) {
      throw new Error("Usuário já cadastrado!")
    }

    //save user
    return userRepository.save(data);
  }
}

export { CreateUserService }