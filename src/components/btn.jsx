import { useState } from 'react'

function IncDec(){
    const [count, setCount] = useState(0)

    return(
        <>
        <h1>{count}</h1>
        <button className='btn' onClick={() => setCount(count + 1)}>Increase</button>
        <button className='btn1' onClick={() => setCount(0)}>Reset</button>
        {count == 0 ? <button className='btn2' onClick={() => setCount(count)}>Decrease</button> : <button className='btn2' onClick={() => setCount(count - 1)}>Decrease</button>}

        </>
    )
}

export default IncDec