const express = require("express");

const router = express.Router();

const userRouter  = require('./user/user.js')
const accountRouter = require('./user/account.js')

router.use("/user", userRouter)

router.use("/account",accountRouter)

module.exports  = router;