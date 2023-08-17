import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import U_state_exam_1 from './UseState/U_state_exam_1';
import U_state_exam_2 from './UseState/U_state_exam_2';
import U_state_count from './UseState/U_state_count';
import U_state_input from './UseState/U_state_input';
import U_state_radiobtn from './UseState/U_state_radiobtn';
import TodoList from './UseState/U_state_inital_func';
import Counter from './UseReducer/Reducer_age';
import Reducer_exam_1 from './UseReducer/Reducer_exam_1';
import Props_exam_1 from './Props/Props_exam_1';
import Prop_data from './Props/Prop_data';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <U_state_exam_1/>
    <U_state_exam_2/>
    <U_state_count/>
    <U_state_input/>
    <U_state_radiobtn/>
    <TodoList/> */}
    {/* <Counter/>
    <Reducer_exam_1/>
     */}
    <Prop_data/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
