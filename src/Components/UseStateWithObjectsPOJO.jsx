import { useState } from "react"



const UseStateWithObjectsPOJO =( props )=>{

    // const [v, f] = useState( initalVal )
    // const [fellowObj, setFellowObj] = useState( { name: "Mike", favAnimal: "Nemo 🎏"} )
    const [fellowObj, setFellowObj] = useState( 
        { name: "Mike", favAnimal: "Nemo 🎏" } 
    )
    console.log("THE STATE OF  fellowObj: " , fellowObj)
    console.log("fellowObj.isAwesome: " , fellowObj.isAwesome)
    //  {k: v, ♾} - FOR NOW



    return(<div className="card">
        <img src="https://avatars.githubusercontent.com/u/96216513?v=4" alt={ `A Dazzling Headshot of: ${fellowObj.name}` } />
        <h2>Name: {fellowObj.name}</h2>
        <p>Favorite Animal: {fellowObj.favAnimal}</p>

        {/* askingQuestion/Condition ?  true : false */}
        {/* {fellowObj.isAwesome ?  <h1>isAwesome: OFCORSE!</h1> : <></> } */}
        {
            fellowObj.isAwesome ?  
            <h1>isAwesome: OFCORSE!</h1> 
            : 
            <></> 
        }
            {/* <h1>isAwesome: {fellowObj.isAwesome}</h1> */}

        <br/><br/>

        <button 
            onClick={  
                (sythEvent)=>{ 

                    // setFellowObj(   { name: "Mike", favAnimal: "Nemo 🎏" ,   isAwesome: true }   ) 
                    // setFellowObj(   { ...fellowObj , isAwesome: true }   ) 
                    setFellowObj(   { isAwesome: true, ...fellowObj }   ) 
                } 
            } 
        >
            Add A Key
        </button>

    </div>)
}

export default UseStateWithObjectsPOJO