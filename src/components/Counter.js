import { useCallback, useMemo, useState } from "react";
import { useCounter } from "../hooks/use-counter";


// function fib(n){ //1,1,2,3,5
//     if(n===1 || n===2){
//         return 1
//     }
//     return fib(n-1)+fib(n-2)
// }

function Counter() {
    console.log('render counter');
    const [number, setNumber] = useState(10);
    const [num, inc, dec] = useCounter(10);

    function handleClick(){

        setTimeout(() => {
            // setNumber(number=>number+1);
            setNumber(number+1);
        }, 2000)

        // console.log(number); 
    }

    const fibFx = useCallback(function fib(n){ //1,1,2,3,5
        if(n===1 || n===2){
            return 1
        }
        return fib(n-1)+fib(n-2)
    })

    const fibMemoized = useMemo(()=>fibFx(number), [number,fibFx])

    return(
        <>
        <h1 style={{color:'white'}}>{number} | {fibMemoized}</h1>
        <button onClick={handleClick}>Add</button>

        <h1 style={{color:'white'}}>Counter Hook : {num} </h1>
        <button onClick={inc}>Inc</button>
        <button onClick={dec}>Dec</button>
        </>
    )
}

export default Counter;