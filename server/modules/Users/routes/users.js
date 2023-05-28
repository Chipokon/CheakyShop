const Users = require("../../../db/models/user");


module.exports.createNewUser = async (req, res) => {
try{
  await Users.create({
    name: 'dima',
    surname: 'koshmelev',
    nickname: 'Chipokon',
    email: 'chipokonamaster@gmail.com',
    password: '123'

  })
  const users = await Users.findAll()
  console.log(1, users);
} catch(error){
  console.log(error);
}
}
