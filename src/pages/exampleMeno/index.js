import React, { useState } from 'react';

function ExampleMemo() {
    const [xiaoxiao, setXiaoxiao] = useState('小小在待客状态')
    const [dada, setDaDa] = useState('大大在待客状态')
    return (
        <>
            <button onClick={()=>{setXiaoxiao(new Date().getTime())}}>小小</button>
            <button onClick={()=>{setDaDa(new Date().getTime())}}>大大</button>
            <ChildComponent name={xiaoxiao}>{dada}</ChildComponent>
        </>
    )
}

function ChildComponent({name, children}) {
    return(
        <>
            <div>{}</div>
            <div>{}</div>
        </>
    )
}

export default ExampleMemo