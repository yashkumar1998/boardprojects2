import React,{useState, usestate} from 'react'
function Clock(){
    let time = new Date().toLocaleTimeString();
    const [ctime, setCtime] = useState(time);

    function updatedata(){
          time = new Date().toLocaleTimeString();
        setCtime(time);
    }
setInterval(updatedata, 1000);
    return(
        <h1>{ctime}</h1>
    )
}
export default Clock; 