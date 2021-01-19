import React, { useState, useEffect } from 'react';

function Exercise2() {
    
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)


    const windows =  ({clientX,clientY}) => {setX(clientX); setY(clientY)}
    
    

    useEffect(()=> {document.addEventListener('mousemove',windows )
    return () => document.removeEventListener('mousemove',windows )
    })
    // const colorValue = x > window.innerWidth / 2 ? "blue" : "tomato"

    const Style = {backgroundColor: x > window.innerWidth / 2 ? "blue" : "tomato" , height:'100vh'}

    return(
        <div style={Style}>
        <h1>this x{x} this is{y}</h1>
        </div>
    )
}

export default Exercise2

