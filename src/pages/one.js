import React,{ useEffect } from 'react';

function One() {
    useEffect(() => {
        console.log('组件销毁1')
    }, [])
    return ( <div>111</div> );
}
 
export default One;