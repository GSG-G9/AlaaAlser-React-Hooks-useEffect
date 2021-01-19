import React, { useState, useEffect } from 'react';

function Exercise1() {
    
    const [count, setCount] = useState(0)
    
    const incrementCount = () => {
        setCount(count+1)
    }

    useEffect(()=> {document.addEventListener('mousedown',incrementCount)
    return () => document.removeEventListener('mousedown',incrementCount)
    })

    return(
        <h1>{count}</h1>
    )
}

export default Exercise1

