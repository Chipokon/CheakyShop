const Cards = require("../../../db/models/card");
const Users = require("../../../db/models/user");
module.exports.getAllCategories = async (req, res) => {
      
        // const user = await Users.findAll({ raw: true });
        // console.log('USERS', user);
        // try{
        //     await Cards.create({
        //       name: `Card #${Math.floor(Math.random() * 100)}`,
        //       type: `wow token #${Math.floor(Math.random() * 100)}`,
        //       cost: Math.floor(Math.random() * 10000),
        //       owner: 'chipokonamaster@gmail.com',
          
        //     })
        //   } catch(error){
        //     console.log(error);
        //   }
        const data = await Cards.findAll({ raw: true });
        console.log("CARDS", data.length);
        res.json({data: data});
        // res.sendStatus(200);
    
}
  