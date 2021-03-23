import React from 'react';
import { render } from 'react-dom';
// import './index.css';
import Router from './components/Router';
import './css/style.css';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

render(<Router />, document.querySelector('#root')); 