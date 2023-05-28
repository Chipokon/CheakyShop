const { Router } = require('express');
const { getAllCategories } = require('../../modules/Users/routes/categories');
const router = new Router();

router.get('/', getAllCategories)

module.exports = router;
