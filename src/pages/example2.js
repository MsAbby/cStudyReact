import React, { useState } from 'react';
import { CountContext } from './context'
import Three from './three'

function Example2() {
    const [count, setCount ] = useState(0) // 数组解构

    return (
        <div>
            <p>点击{count}</p>
            <button onClick={() => {setCount(count+1)}}>点击</button>
            {/* 把count共享出去了 */}
            <CountContext.Provider value={count}>
                {/* 放子组件才能起作用 */}
                <Three></Three>
            </CountContext.Provider>
        </div>
    )
}
 
export default Example2;