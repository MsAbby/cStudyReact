
## 纯函数组件
01 纯函数组件没有状态 - useState <br>
02 纯函数组件没有生命周期<br>
03 纯函数组件没有this<br>
04 只能是纯函数<br>

## react hooks
01 2018年出的<br>
02 利用hook组件的形式代替类组件的形式，有无状态均可，让组件复用性增加<br>
03 优点1 ： 代码精简<br>
03 优点2： 没有继承<br>
03 优点3： 没有生命周期<br>
03 优点4： 没有渲染逻辑<br>
04 主要目的： 不写class<br>
05 实际： 组件尽量写成纯函数，如果需要外部功能，就用钩子把外部代码钩进来<br>
06 四种常见的hooks钩子作用不同： useState, useEffect, useContext, useReducer<br>
07 react规定： 钩子一律使用user前缀命名，自定义的一样<br>

## useState（两个参数）
01 作用： 纯函数没有状态， useState() 为函数组件引入状态 <br>
02 说明： 第一项是变量， 第二项是函数，更新状态。 [count, setCount] = useState(0)<br>
03 如何声明<br>

````
let _userState = userState(0) // 0代表初始
let count = _userState[0]
let setCcount =  _userState[1]

````

## useEffect（两个参数）
01 作用1： 纯函数没有生命周期函数， useEffect相当于生命周期ComponentDidMount()和ComponentDidUpdate()<br>
01 作用2： 处理“ 异步 ”请求<br>
02 说明： 第一项是异步操作， 第二项是数组（只要变化就会执行），第二项默认不填时，每次渲染都会执行<br>
````
<!-- 第二个参数是[], 被认为执行的是组件销毁时 -->
 useEffect(() => {
    console.log('组件销毁1')
}, [])
return ( <div>111</div> );
````

## useContext
01 解决父子组件之间的传值, 实现共享 (以前是props)
02 引入createContext


## useState
001 相当于react-redux


