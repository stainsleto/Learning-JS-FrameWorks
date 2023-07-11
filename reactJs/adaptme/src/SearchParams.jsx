import {useState } from 'react';
const SearchParams = () =>{
    const [location, setLocation] = useState("stains")
    const [animal,setAnimal] = useState("")
    const ANIMALS = ['cat','dog','fish','reptail']
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

        </div>
    )
}

export default SearchParams