import './App.css';
import React, { Component } from 'react';
import HOME from './Home';
import ClassComponent from './ClassComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import RoutesComp from './Components/RoutesComp';
import ComponentB from './Components/UseContext/ComponentB';
import ComponentC from './Components/UseContext/ComponentC';
import UseReducerComp from './Components/useReducer/UseReducerComp';

 export const UserContext = React.createContext();

function App() {

let studentMarks = [10,20,30,40]; //array

//object
let studentDetails = {
  name:'Diya',
  age:20
}
  return (
    <div className='App'>
      <Header />
      <RoutesComp />

      <hr />
      {/* <UserContext.Provider value={"this is useContext"}>
        <ComponentB />
      </UserContext.Provider> */}

      {/* useReducer */}
      <UseReducerComp />
      

     {/*<h2 className='text-primary'>Welcome to ReactJs</h2>
    <HOME name = "Ram" age = "25" studentMarks={studentMarks} studentDetails={studentDetails}/>
    <ClassComponent name = "Raj" age = "24" studentMarks={studentMarks}/>*/}
    </div>
  );
}

export default App;
