const express = require('express');
const router = express.Router();

//route GET
//desc TEST route
//access PUBLIC
router.get('/', (req, res) => res.send('Profile exists'));

module.exports = router;
