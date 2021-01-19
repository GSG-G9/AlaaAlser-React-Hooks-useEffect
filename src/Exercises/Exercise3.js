import React, { useState, useEffect } from 'react';

function Exercise3() {

    const [value, setValue] = useState('')
    const [gifs, setGifs] = useState([])

    const key = '4TUmBidQTdgQcPRKWFUzbUewOg6W8ORP'
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${value}`;

    useEffect(() => {
        const abortController = new AbortController();


        if(value !== '') fetch(url, {signal: abortController.signal})
        .then((res)=> res.json())
        .then((result)=> setGifs(result.data.map((gif)=>{
            return gif.images.original.url
        }))).catch(err => console.log(err.message))
        console.log('dd')
        return ()=> abortController.abort()
    },[value])

    console.log(gifs)


    return(
        <>
        <form>
            <input type='text' placeholder='type here' onChange={(e)=> setValue(e.target.value)} />
        </form>
        <div>
            {gifs.map((gif)=>{
                return (
                    <div>
                        <img src={gif}/>
                    </div>    
                )
            })}
        </div>
        </>
    )
}

export default Exercise3