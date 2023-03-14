import React from 'react'

export default function SignUp() {
    

    const [ formData, setFormData ] = React.useState({
        email:"",
        password:"",
        confirmPassword:"",
        newsletter:false

    })

    function handleChange(event){
        const { name, value, type, checked } = event.target
        setFormData(prevData =>{
            return{
                ...prevData,
                [name] : type === "checked" ? checked : value
            }
        })

    }

    function onSubmit(event){
        event.preventDefault()
        console.log(formData)
        
        if(formData.password != formData.confirmPassword){
            console.log("Wrong pass")
            return
        }

        if(formData.newsletter){
            console.log("Thanks for signing in ")
        }
    }


    return(
        <>
        
        <form onSubmit={onSubmit}>
            <input 
                type="email"
                placeholder="Enter You Mail Id"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />

            <input 
                type="password"
                placeholder="Enter You Password"
                onChange={handleChange}
                name="password"
                value={formData.password}
            />

            <input 
                type="password"
                placeholder="Confirm  Password"
                onChange={handleChange}
                name="confirmPassword"
                value={formData.confirmPassword}
            />

            <input 
                type="checkbox"
                onChange={handleChange}
                name="newsletter"
                checked={formData.newsletter}
                id='newsletter'
            />
            <label
            htmlFor='newsletter'
            > I want to join news letter </label>

            <button>SignUp</button>

        </form>
        
        </>
    )
}