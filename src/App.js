import './App.css';
import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const name = "Vishnu narayanan";

  const message = () => {
    return "Good Morning";
  }

  return (
    <div className='App'>
      <Header />
      <Home  />
    </div>
  );
}

function Row(){
  return(
    <div>
      <tr>
        <th>name</th>
        <th>address</th>
      </tr>
    </div>
  )
}
 
function Column(){
  return(
    <div>
      <tr>
        <td>Vishnu</td>
        <td>meenangadi</td>
      </tr>
    </div>
  )
}
 
export default App;
