// create your App component here
import React, { useState, useEffect } from "react";

function App(){
    const [pic, setPic]= useState("")

    useEffect(()=> {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((res)=>res.json())
        .then((data) => {
            console.log(data)
            setPic(data.message)
        })
    },[])

    if (pic === null) 
    return <p>Loading...</p> ;

    return (<img src={pic} alt="A Random Dog"/>)
}

export default App;