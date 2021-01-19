import React, { useState } from 'react';

function Exercise4() {

    const [value, setValue] = useState('')

    return(
        <>
        <form>
            <input type='text' placeholder='type here' onChange={(e)=> setValue(e.target.value)} />
        </form>
        <div>
        <img src={`https://robohash.org/${value}.png`} alt='' />
        </div>
        </>
    )
}

export default Exercise4