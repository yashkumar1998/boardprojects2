import React, {useState} from 'react'
import './Counter.css'
function Counter(){
    const [num, setNum] = useState(0);
    function incNum(){
        setNum(num+1);
    }
    function resetNum(){
        setNum(0);
    }
    function decNum(){
        if(num>0){
            setNum(num-1)
        }else{
            alert("number is 0");
            setNum(0);
        }
    }
    return(
        <>
        <div className="main">
            <div className="center">
                <h1 className="data">{num}</h1>

            </div>
            <div className="btn">
                    <button onClick={incNum} style={{backgroundColor:"green"}}>+</button>
                    <button onClick={resetNum} style={{backgroundColor:"yellow"}}>Reset</button>
                    <button onClick={decNum} style={{backgroundColor:"red"}}>-</button>

                </div>
        </div>

        </>

    )
}
export default Counter; 