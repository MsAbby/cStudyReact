import React, { useContext } from 'react';
import { CountContext }from './context'

function Three() {
    let count = useContext(CountContext)
    console.log(count)
    return ( <div>您是{count}</div> );
}
 
export default Three;