const mongoose = require('mongoose')

const { MONGO_KEY } = require('../config.js')

mongoose.connect(MONGO_KEY)

const UserSchema = new mongoose.Schema({
    firstName : String,
    lastName : String,
    username : String,
    password : String,
})

const accountSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref:'User',
        required : true
    },
    balance : {
        type:Number,
        required:true
    }
})



const User = mongoose.model('User', UserSchema)

const Account = mongoose.model('amount', accountSchema)


module.exports = { User, Account }