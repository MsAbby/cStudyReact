import React, { Component, useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import One from './one'
import Two from './two'

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


// ---------------react hooks - 函数组件  没有生命周期了--------------

function Example() {
    const [count, setCount ] = useState(0) // 数组解构
    // 第二个参数不传的时候，相当于两个钩子函数componentDidMount componentDidUpdate

    // 异步不会阻断视图更新
    useEffect(() => {
        console.log('11')
    }) 
    return (
        <div>
            <p>点击{count}</p>
            <button onClick={() => {setCount(count+1)}}>点击</button>
            <Router>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/list">列表</Link></li>
                </ul>
               
                <Route path="/" component={One}></Route>
                <Route path="/list" component={Two}></Route>
            </Router>
        </div>
    )
}
 
export default Example;