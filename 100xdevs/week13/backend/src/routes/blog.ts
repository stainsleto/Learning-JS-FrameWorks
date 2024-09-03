import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { verify } from 'hono/jwt'


export const blogRouter = new Hono<{
    Bindings: {
      DATABASE_URL : string,
      JWT_SECRET : string
    },
     Variables:{
        userId : string
     }
  }>()

blogRouter.use('/*',async (c, next) => {
    const authHeader = c.req.header("authorization") || ""
    const user = await verify(authHeader, c.env.JWT_SECRET)

        if(user && typeof user.id === 'string'){
            c.set('userId', user.id);
            await next()
        }
        else{
            c.status(403);
            return c.json({message : "You are not logged in"})
        }

})

blogRouter.post('/', async (c) => {
    const body = await c.req.json()
    const userId = c.get("userId")
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try{   
        const blog = await prisma.post.create({
            data : {
                title : body.title,
                content : body.content,
                authorId : userId,
            }
        })
        
        return c.json({ 
            message : 'blog created',
            id : blog.id
        })
    }
    catch(err){
        c.status(401)
        return c.json({ errorBlogCreation : err})
    }

})
  
  blogRouter.put('/', async (c) => {
    const body = await c.req.json()

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try{ 
        const blog = await prisma.post.update({
            where : {
                id : body.id
            },
            data:{
                title : body.title,
                content : body.content,
            }
        })
        
        return c.json({ message : 'update done', updated_content : blog})
    }

    catch(err){
        c.status(403)
        return c.json({ errorOnUpdation : err})
    }
})


blogRouter.get('/bulk', async (c) => {

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    try{   
        const blogs = await prisma.post.findMany()
        
        return c.json({blogs})
    }

    catch(err){
        c.status(411)
        return c.json({"Error occured during bulk action" : err})
    }
  })
  
  blogRouter.get('/:id', async (c) => {
    const id = c.req.param('id')

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try{
        const blog = await prisma.post.findFirst({
            where : {
                id : id
            }
        })

        return c.json({blog})
    }

    catch(err){
        c.status(411)
        return c.json({'Error on single blog fetch' : err})
    }
    
  })
  
  
  