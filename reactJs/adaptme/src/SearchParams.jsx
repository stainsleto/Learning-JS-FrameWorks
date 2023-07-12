import {useState, useEffect } from 'react';
const SearchParams = () =>{
    const [location, setLocation] = useState("stains")
    const [animal,setAnimal] = useState("")
    const [pets,setPets] = useState([])
    const ANIMALS = ['cat','dog','fish','reptail']


    useEffect( ()=>{
        requestPets();
    },[])

    async function requestPets(){
        const res = await fetch(`https://pets-v2.dev-apis.com/pets?animals=${animal}&location=${location}&breed=${breed}`)
        const json = await res.json();
        setPets(json.pets)
    }
    return(
        <div className='search-params'>
            <form>
                <label htmlFor='location'>
                    location
                    <input id='location' onChange = { (e)=> setLocation(e.target.value) } value={location} placeholder="location" />
                </label>

                <label htmlFor='animal'>
                    animal
                    <select id='animal' onChange = { (e)=> setAnimal(e.target.value) } value={animal} placeholder="animal" >

                    {ANIMALS.map((animal) => (
                        <option key={animal}>{animal}</option>
                    ))}
                    </select>
                </label>
                <button>Submit</button>
            </form>
            <div>
                {pets.map( pets =>{
                    <p>{pets}</p>
                })}
            </div>

        </div>
    )
}

export default SearchParams