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
import Api_practice from './UseState/Api/Api_practice';
import Filter from './Components/Category/Filter';
import Ternary from './Components/Ternary_operator/Ternary';
import Effect from './Components/useEffect/Effect_practice';
import CreateContext from './Components/UseContext/CreateContext';
import U_Context from './Components/UseContext/U_Context';
import Update from './Components/Update';
import UseRef_exam from './Components/UseRed/UseRef_exam';
import UseRef_exam2 from './Components/UseRed/UseRef_exam2';
import UseRef_input from './Components/UseRed/UseRef_input';
import UseRef_name from './Components/UseRed/UseRef_name';
import UseEffect_with_Api from './Components/useEffect/UseEffect_With_Api';
import Customhook_Api from './Components/CustomHooks/Customhook_Api';
import UseMamo from './Components/UseMamo/UseMamo';
import Tab from './Components/Tabs/Tab';
import Tab1 from './Components/Tabs/Tab1';
import SolutionUseMamo from './Components/UseMamo/SolutionUseMamo';


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
    {/* <Counter/> */}
    {/* <Reducer_exam_1/> */}
    
    {/* <Prop_data/> */}
    {/* <Api_practice/> */}
    {/* <Filter/> */}
    {/* <Ternary/> */}
    {/* <Effect/> */}
    {/* <UseEffect_with_Api/> */}
    
    {/* <CreateContext/> */}
    {/* <U_Context/> */}
    {/* <Update/> */}
    {/* <UseRef_exam/> 
    <UseRef_exam2/>
    <UseRef_input/>
    <UseRef_name/> */}
     {/* <Customhook_Api/> */}
    {/* <UseMamo/> */}
    {/* <SolutionUseMamo/> */}
    <Tab/>
    <Tab1/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
