const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

//route GET
//desc register user
//access PUBLIC
router.post(
  '/',
  [
    check('name', 'Name is required')
      .not()
      .isEmpty(),
    check('email', 'Please provide a valid email').isEmail(),
    check('password', 'Passwords must be six or more characters').isLength({
      min: 6
    })
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    console.log(req.body);
    res.send('User connected');
  }
);

//GET
//desc GET USERS
//access PUBLIC

module.exports = router;
