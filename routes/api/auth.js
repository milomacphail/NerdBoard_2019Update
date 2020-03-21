const express = require('express');
const router = express.Router();

//route GET
//desc TEST route
//access PUBLIC
router.get('/', (req, res) => res.send("Auth auth'd"));

module.exports = router;
