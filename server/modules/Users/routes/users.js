const Users = require("../../../db/models/user");
const userBLL = require("../bll/user.bll")

module.exports.createNewUser = async (req, res) => {
try{
  const data = req.body
  const [err, answer] = await userBLL.registration(data)
  console.log(answer);
  if (err) {
    res.status(500).send({
      success: false,
      message: err,
      data: {},
    });
  }
  res.send(answer)
} catch(error){
  console.log(error);
  res.send(error);
}
}
