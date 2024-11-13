import React from 'react'
import { useState, useEffect } from 'react'

function useFetchState(url) {
    const [getter, setGetter] = useState([])

    async function getYourData() {
        const response = await fetch(url)
        const yourData = await response.json()
        setGetter(yourData)
      }
    
      
      useEffect(() => {
        getYourData()
      }, [])
 
      return [
        getter,setGetter 
      ]
}

export default useFetchState

// example use case 

//  const [animals, setAnimals] = useFetchState('http://localhost:3000/animals')


// Full use Example 

// separate hook component below ----------------------------
//import React from 'react'
// import { useState, useEffect } from 'react'

// function useFetchState(url) {
//     const [animals, setAnimals] = useState([])

//     async function getAnimals() {
//         const response = await fetch(url)
//         const animalData = await response.json()
//         setAnimals(animalData)
//       }
    
      
//       useEffect(() => {
//         getAnimals()
//       }, [])
 
//       return [
//         animals,setAnimals 
//       ]
// }

// export default useFetchState

//--------------------------------------

/// app where were using the new component-------------

// import useFetchState from '../hooks/useFetchState'



// function App() {

//   const [animals, setAnimals] = useFetchState('http://localhost:3000/animals')

//     return (

//     )
// }

// export default App


