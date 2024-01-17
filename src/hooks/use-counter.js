import {useState } from "react";

function useCounter(value){
    const [number, setNumber] = useState(value)

    const increment = ()=>{
        setNumber(number+1)
    }

    const decrement = ()=>{
        setNumber(number-1)
    }

    return [number, increment, decrement]
}

export {useCounter};