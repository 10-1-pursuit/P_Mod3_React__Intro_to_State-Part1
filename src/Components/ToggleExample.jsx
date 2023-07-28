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
    // Rewrite this as a ternary

    // Recreate the Sam/Gary Toggle from Module 2


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