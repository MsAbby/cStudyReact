import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import Example3 from './pages/example3'
// import ExampleCombine from './pages/exampleCombine'
import ExampleMemo from './pages/exampleMeno'

ReactDOM.render(<ExampleMemo/>,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
