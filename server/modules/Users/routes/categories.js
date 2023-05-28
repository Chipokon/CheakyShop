const router = require("express").Router();
const  {Card}  = require("../../../db/models/card");
module.exports.getAllCategories = async (req, res) => {
        const data = await Card.findAll({ raw: true });
        
        console.log("TEST!"); 
        res.json({data: data});
    
    //   .post(async (req, res) => {
    //     const { val } = req.body;
    //     const data = await Card.findAll({ where: { title: val } });
    //     res.json({ data })
    //   })
    
    //   .delete(async (req, res) => {
    //     const { el } = req.body;
    //     await Subscription.destroy({ where: { card_id: el } });
    //     await Card.destroy({ where: { id: el } });
    //     res.json({ el });
    //   });
    
    module.exports = router;
}
  