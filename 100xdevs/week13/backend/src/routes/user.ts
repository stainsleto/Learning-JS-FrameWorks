import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode , sign, verify } from 'hono/jwt'

export const userRouter = new Hono<{
    Bindings: {
      DATABASE_URL : string,
      JWT_SECRET : string
    }
  }>()


userRouter.post('/signup', async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
  
    const body = await c.req.json()
    try {
      const user = await prisma.user.create({
        data : {
          email : body.email,
          password : body.password,
          name : body.name
        }
      })
  
      const token = await sign({id : user.id}, c.env.JWT_SECRET)
  
      return c.json({ message : 'User Created', token : token })
    }
    catch(e){
      c.status(411);
      return c.json({'Error Occured on signup': e})
    }
  })
  
  userRouter.post('/signin', async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
  
    const body = await c.req.json()
  
    try{
      const user = await prisma.user.findFirst({
        where : {
          email : body.email,
          password : body.password
        }
      })
  
      if(!user){
        c.status(403);
        return c.json({
          message : "Incorrect credentials"
        })
      }
      else{
        const token = await sign({id : user.id}, c.env.JWT_SECRET)
        return c.json({"token" : token})
      }
    }
  
    catch(e){
      c.status(403);
      return c.json({'Error Login' : e})
    }
  })
  