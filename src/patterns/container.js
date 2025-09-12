import { useState } from 'react'

export default functionuseDogs(){
    const [dogs, setDogs] = useState([]);

    function async getDogs(){
        const dogs = await fetch('https://dog.ceo/api/breed/labrador/images/random/6');


    }
}