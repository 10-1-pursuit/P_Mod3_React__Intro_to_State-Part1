import { useState } from "react"


const UseStateWithArrays =( props )=>{

    // const [v, f] = useState( startingVal )
    // const [arrayOfNums, setArrayOfNums] = useState( [] )
    const [arrayOfNums, setArrayOfNums] = useState( [80, 35, 11, 16, 4] )
        console.log("THE STATE OF  arrayOfNums: ", arrayOfNums)

    /* 
    
        MINIMALLY FUNCTIONAL
        +
        MINIMALLY DISRUPTIVE (ERROR)


        const [someBoolean, setSomeBoolean] = useState(false)
        const [someString, setSomeString] = useState("")
        const [someNumber, setSomeNumber] = useState(0)
            // Am I doing Division (Math) : CAN'T DIVIDE BY 0   ::  num / someNumber
            const [someObj, setSomeObj] = useState(null)


        BASE CASE
        +
        EDGE CASES

    */
   

    // const numsForTheDOM = arrayOfNums.map( (eachNum)=>{ return(<h2 key={eachNum}>{eachNum}</h2>) } )
    const numsForTheDOM = arrayOfNums.map(  
            (eachNum)=>{ 
                return(
                        <h2  key={eachNum}>
                            {eachNum}
                        </h2>
                    ) 
            } 
        )
    


    return(
        <div>
            <h1>SHOW ME THE NUMS</h1>
            {
                // arrayOfNums.map( (eachNum)=>{ return(<h2>{eachNum}</h2>) } )
                numsForTheDOM
            }

            <button 
                onClick={  
                    (sythEvent)=>{ 

                        // setArrayOfNums(  [ ...80, 35, 11, 16, 4,  44 ]  )
                        // setArrayOfNums(  [ ...arrayOfNums, 44 ]  )  // Bottom of List/Section

                        setArrayOfNums(  [ 44, ...arrayOfNums ]  )  // Top of List/Section
                        // setArrayOfNums(  [ 44, ...80, 35, 11, 16, 4 ]  )

                        
                        // arrayOfNums.push(44)   // NO BUENO
                        // console.log("Array of Nums.. What's Good? 👀: " , arrayOfNums)
                    } 
                }
            >
                Add a Num
            </button>

            <br/><br/>
        </div>
    )

}

export default UseStateWithArrays