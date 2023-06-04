const errorCONF = require("../services/info/error.conf");
const userDB = require("../db/users.db");
const bcrypt = require("bcrypt");
const tokenSVC = require("../../../service/tokens/token.svc");
const userCONF = require("../services/info/user.conf");
module.exports.registration = async (data) => {
  const answer = {
    success: true,
    message: "message text",
    data: {},
  };
  let err = null;
  try {
    const { email } = data;
    const candidate = await userDB.users.findUserByEmail({ email });
    if (candidate) {
      answer.success = false;
      answer.message = errorCONF.registrationError.USER_ALREADY_EXIST;
    } else {
      const hashPass = await bcrypt.hash(data.password, 4);
      const newUser = await userDB.users.createNewUser({ ...data, hashPass });
      const tokens = await tokenSVC.createToken({
        email: newUser.email,
        userId: newUser.id,
      });
      await userDB.users.saveToken({
        id: newUser.id,
        refreshToken: tokens.refreshToken,
        accessToken: tokens.accessToken,
      });
      const user = (userCONF.user = {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
        surname: newUser.surname,
        nickname: newUser.nickname,
      });
      answer.data.user = { user, tokens };
    }
  } catch (error) {
    console.log(error);
    err = errorCONF.registrationError.PASS_AND_NAME;
  }
  return [err, answer];
};
