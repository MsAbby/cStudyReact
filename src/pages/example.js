import React, { Component, useState } from 'react';

// --------传统写法-类组件------------ 

// class Example extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             count: 0
//         }
//         this.handelClick = this.handelClick.bind(this)
//     }
//     render() { 
//         return ( 
//             <div>
//                 <p>点击{this.state.count}</p>
//                 <button onClick={this.handelClick}>点击</button>
//             </div>
//          );
//     }
//     handelClick() {
//         this.setState({
//             count: this.state.count+1
//         })
//     }
// }


// ---------------react hooks - 函数组件--------------

function Example() {
    const [count, setCount ] = useState(0) // 数组解构
    return (
        <div>
            <p>点击{count}</p>
            <button onClick={() => {setCount(count+1)}}>点击</button>
        </div>
    )
}
 
export default Example;