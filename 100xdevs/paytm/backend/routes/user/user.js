const express = require("express");
const zod = require("zod");
const { User, Account } = require("../../db");
const jwt = require("jsonwebtoken");
const  {JWT_SECRET}  = require('../../config');
const { authMiddleware } = require("./middleware");
const router = express.Router();


const signupSchema = zod.object({
    firstName : zod.string(),
    lastName : zod.string(),
    username : zod.string().email(),
    password : zod.string(),
})

const signinSchema = zod.object({
    username : zod.string().email(),
    password : zod.string(),

})

const updateSchema = zod.object({
    password  :zod.string().optional(),
    firstname : zod.string().optional(),
    lastName : zod.string().optional(),
})

router.post("/signup", async (req,res) => {

    const body = req.body
    const {success} = signupSchema.safeParse(body)
    if(!success){
       return res.json({message : "Incorrect Inputs"})
    } 

    const user  = User.findOne({
        username : body.username
    })

    if (user._id) {
        return res.json({
            message : "User already exists"
        })
    }

    const dbUser = await User.create(body);

    const userId = dbUser._id

    await Account.create({
        userId,
        balance : 1 + Math.random() * 10000
    })

    const token = jwt.sign({
        userId : dbUser._id
    },JWT_SECRET)

    res.json({
        message : "User created",
        token : token,
        username : dbUser.firstName

    })
})

router.post("/signin", async(req,res) => {
    const body = req.body

    const {success} = signinSchema.safeParse(body)

    if(!success){
        return res.status(411).json({
            message : "Incorrect Inputs"
        })
    }

    const dbUser = await User.findOne({ 
        username : body.username,
        password : body.password
    })

    if(dbUser){
        const token = jwt.sign({
            userId : dbUser._id
        },JWT_SECRET);
        return res.json({
            token : token,
            username : dbUser.firstName
        })
    }

    res.status(411).json({
        message : "Error while logging in"
    })

})

router.put("/", authMiddleware, async(req,res) => {
    const { success } = updateSchema.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            message : " Error on entered details"
        })
    }

    await User.updateOne({
        _id : req.userId
    }, req.body);
    res.json({
        message : "update successful"
    })

})

// router.get('/bulk',authMiddleware, async(req,res) => {
//     const filter = req.query.filter || "";
//     const users = await User.find({
//         $or:[
//             {
//                 firstName : {"$regex" : filter},
//                 lastName : {"$regex" : filter}
//             }
//         ]
//     })

//     res.json({
//         user : users.map (user => ({
//             username : user.username,
//             firstName : user.firstName,
//             lastName : user.lastName,
//             _id : user._id
//         }))
//     })


// })

router.get("/bulk", async (req, res) => {
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})





module.exports = router;