const router = require('express').Router()
const db = require("../models")
const bcrypt = require('bcrypt')

const { User } = db

router.post('/', async (req, res) => {
    let {password, ...rest } = req.body;
    const user = await User.create({
        ...rest,
        passwordDigest: await bcypt.hash(password, 10)
    })
    res.json(user)
})


router.get('/', async (req, res) => {
    const users = await User.findAll()
    res.json(users)
})

  
User.init({
    userId: {
      type: DataTypes.SMALLINT,
      primaryKey: true,
      autoIncrement: true

    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    passwordDigest: DataTypes.STRING
},
)  

module.exports = router