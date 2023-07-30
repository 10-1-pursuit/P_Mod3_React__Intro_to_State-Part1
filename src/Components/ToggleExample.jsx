import { useState } from 'react'


const ToggleExample =( props )=>{

    //  const [v, f] = useState( startingValueForVariable )
    const [hiOrBye, setHiOrBye] = useState(false)  //  🚚
    console.log("State of  hiOrBye: " , hiOrBye)


    //  const [v, f] = useState( startingValueForVariable )
    const [h1Text, setH1Text] = useState( "Hello!" )
    console.log("State of  h1Text: " , h1Text)



    function handleToggleText(){

        if(hiOrBye === false){
            setH1Text( "Hello!" )
        } else {
            setH1Text( "Have a Blessed Weekend!" )
        }

    }
    // BONUS: Rewrite this as a ternary
  // const handleToggleText = () => {
    // whatWillChange/functionName (checkThisState ? ifTrue : ifFalse --- though for this it's reverse - YOU CAN EXPLAIN THIS MUCH BETTER THAN I 😔
    //     setH1Text(hiOrBye === false ? "Hello!" : "Have a Blessed Weekend!")
    //   };
    
    // BONUS++: Recreate the Sam/Gary Toggle from Module 2 - Repo Below Incase ⏳🌀💫
    //// https://github.com/10-1-pursuit/P_Mod2__Cohort_App_Application_Planning_and_Design
    
// function SamAndGaryToggleEx(){
//     let stateOfSamOrGaryH2 = true

// const imgForInstructor = document.querySelector("#instructor-image") //rework

// const h2ForInstructorName = document.querySelector("#instructor-name") // rework 
//     // h2 onClick({()=>{}})
//     h2ForInstructorName.addEventListener("click", ()=>{
//  stateOfSamOrGaryH2 = !stateOfSamOrGaryH2  
//          console.log("stateOfSamOrGaryH2:", stateOfSamOrGaryH2)
//             stateOfSamOrGaryH2 ? 
//                 (
//                     h2ForInstructorName.innerText = "Sam",
//                     imgForInstructor.src = "https://ca.slack-edge.com/TCVA3PF24-U04QV0UA1PY-cb148d3f560e-512"
//                 )
//                 : 
//                 (
//                     h2ForInstructorName.innerText = "Gary",
//                     imgForInstructor.src = "https://ca.slack-edge.com/TCVA3PF24-U03BU4X0881-e9f8b5bdffc2-512"
//                 )
//     }
        // setH1Text( "Don't Do It Fam" )  // NO BUENO
  

    return(<>
        <h1 
            onClick={  
                
                (sythEvent)=>{ 

                    setHiOrBye( !hiOrBye )

                    handleToggleText()

                }  
            
            }    
        >
                {h1Text}
        </h1>
    </>)
}

export default ToggleExample



  // Conditional Rendering

























// const ToggleExample =( props )=>{

// //  const [v, f] = useState( startingValueForVariable )
// const [hiOrBye, setHiOrBye] = useState(false)  //  🚚
// // const hiOrBye = false
// console.log("State of  hiOrBye: " , hiOrBye)


// // const [h1Text, setH1Test] = useState()





    // return(<>
    //     <h1 
    //         onClick={  (sythEvent)=>{ setHiOrBye( !hiOrBye ) }  }    
    //     >
    //             Hello!
    //     </h1>
    // </>)
    // }

// export default ToggleExample



// // Conditional Rendering











// const ToggleExample =( props )=>{

//     return(<>
//         <h1>Hello!</h1>
//     </>)
// }

// export default ToggleExample
