const router = require('express').Router();
const Users = require('./users-models.js');

router.get('/', async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch(err) {
    console.log(err);
    res.status(500).json({ message: 'Could not retrieve users from database' });
  }
})

module.exports = router;