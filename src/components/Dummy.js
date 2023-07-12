import { useEffect, useState } from "react"

export default function Dummy(){
    const [count, setCount] = useState(0);
    const [secondCount, setSecondCount] = useState(0);

    useEffect(()=>alert('Bok od mene'), [secondCount])
    
    function handleClick(){
        setCount(count+1)
    }

    function handleClick2(){
        setSecondCount(secondCount+1)
    }

    return(
        <>
            <span>{count}</span>
            <button onClick={handleClick}>Add</button>
            <span>{secondCount}</span>
            <button onClick={handleClick2}>Add second</button>
        </>
    )
}