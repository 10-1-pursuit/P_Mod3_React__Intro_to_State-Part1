//          📗            react📚
import { useState } from 'react'

import ToggleExample from './Components/ToggleExample.jsx'
import UseStateWithArrays from './Components/UseStateWithArrays.jsx'
import UseStateWithObjectsPOJO from './Components/UseStateWithObjectsPOJO.jsx'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App( ) {

  // const [someVariable, someSetterFunctionForSomeVariable] = useState( initalValue )
  const [count, setCount] = useState( 100 )
  // const count = 100   // initializing value of useState Variable
  
  // const [countAgain, setCountAgain] = useState( 4000 )  // yes - you can
  //// you can make another/multiple States






  // const onlyButton = document.querySelector("button")
  //   onlyButton.addEventListener( "click" , (event)=>{} )





  const theResultOfUseState = useState(":)")
  // console.log( "theResultOfUseState: ", theResultOfUseState )


  function showUseStateExample(){ 

    const someVariable = "Y'all Are Doing Great!"

    const someSetterFunctionForSomeVariable =()=> { 
      // some magic / some functionality
    }

    return [someVariable, someSetterFunctionForSomeVariable]
    // return ["firstThing", "secondThing"]
  } 
  // console.log( showUseStateExample() )






  // count = 11;  // no bueno  :(

  
  //// Array Destructuring

  const [ christine, mike, jeremy ] = [ "christine :)", "mike :)", "jeremy :)" ]
      // const christine = "christine :)"
      // const mike = "mike :)"
      // const jeremy = "jeremy :)"

    // console.log("christine: ", christine)
    // console.log("mike: ", mike)
    // console.log("jeremy: ", jeremy)




  ////  Object Destructuring

  let sam = {
    name: "Sammay :)"
  }
  // console.log(sam.name)

  const { name } = sam
  // console.log("Destructured Key 'name' :" , name)



  //////// js
  return (
    <>

      <UseStateWithObjectsPOJO />

      {/* Using State/useState() With Arrays */}
      {/* <UseStateWithArrays /> */}

      {/* Toggle Feature Compoenent */}
      {/* <ToggleExample /> */}

      
      <div id="our-images">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>


      <div className="card">

        <button onClick={    (sythEvent)=>{  setCount(count+1)  }    }>
          count is {count}
        </button>
        {/* <button onClick={ (newDog) => { console.log("youwishthiwasadoglol: ", newDog )} }>
          no bueno
        </button> */}

      </div>


    </>
  )
}

export default App






/*


<App />
L>
<ToggleExample />


*/