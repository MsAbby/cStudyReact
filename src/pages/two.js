import React, { Component, useEffect } from 'react';

function Two() {
    useEffect(() => {
        console.log('组件销毁2')
    }, [])
    return ( <div>222</div> );
}
 
export default Two;