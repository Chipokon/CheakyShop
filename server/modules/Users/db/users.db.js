const Users = require("../../../db/models/user");

module.exports.users = {
  findUserByEmail: (opt) => Users.findOne({ where: { email: opt.email } }),
  createNewUser: (opt) =>
    Users.create({
      email: opt.email,
      name: opt.name,
      surname: opt.surname,
      nickname: opt.nickname,
      password: opt.hashPass,
    }),
  saveToken: (opt) =>
    Users.update(
      {
        token: opt.accessToken,
        refresh_token: opt.refreshToken,
      },
      { where: { id: opt.id } }
    ),
};
