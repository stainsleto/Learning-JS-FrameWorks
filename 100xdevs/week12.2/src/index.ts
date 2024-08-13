interface User{
    name: string;
    age:number;
    email : string;
    createdDate : Date
}

// Pick -- used to pick only the specific arg from the type 

type userProfile = Pick<User, 'name' | 'email'>

// from the user type we can use only name and email and this can be optional as we are using pick

const displayUserProfile = (user: userProfile) => {
    console.log(`Name : ${user.name}, Email: ${user.email}`)
}

// Partial 

type updatePropsOptional = Partial<userProfile>

// marked the userProfile arg can be optional something like name? email?


// ReadOnly  --

type UserType = {
    readonly name:string;
    readonly age : number
}

type UserReadType = {
    name : string;
    age: number
}

const user:UserType = {
    name:'john',
    age:25
}

//or can make something like this 

const userRead:Readonly <UserReadType> = {
    name:'john',
    age:25
}


// user.age = 13   -->   can't do this because it's read only right now


//Record  ---> records are the one used when there are complex objects

type UserRecord = Record<string,{id:string;username:string}>

const users: UserRecord = {
    'ras@qd1': {
        id : 'ras@qd1',
        username:'josh'
    },
    'ras1dr@' : {
        id:'ras1dr',
        username:'raman'
    }
}

// Map (JS concept)  --->  key value pair 

type UserMapType = {
    id:string;
    username:string;
}

const userMap = new Map<string, UserMapType>()

userMap.set('ras1', {id:'ras1',username:'raj'})
userMap.set('ras2', {id:'ras2',username:'raman'})

const displayUser = userMap.get('ras1')
userMap.delete('ras1')

//Exclude 

type EventType = 'click' | 'scroll' | 'mousemove'

type ExcludeEvent  = Exclude<EventType, 'scroll'> // scroll is excluded now

const handleEvent = (event: ExcludeEvent) => {
    console.log(`Handle event: ${event}`)
}

handleEvent('click')  //--> will get executed

// handleEvent('scroll') //--> will throw error as we have excluded this






