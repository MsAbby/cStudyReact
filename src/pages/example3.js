import React, { useReducer } from 'react';

function Example3() {
    // 两个参数
    const [count, dispatch] = useReducer((state, action) => {
        switch(action) {
            case 'add':
                return state+1;
            case 'sub':
                return state-1;
            default:
                return state
        }
    })
    return (
        <div>
            <p>现在分数{count}</p>
            <button onClick={() => {dispatch('add')}}>新增</button>
            <button onClick={() => {dispatch('sub')}}>减</button>
        </div>
    )
}
 
export default Example3;