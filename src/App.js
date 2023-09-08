import './App.css';
import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import States from './components/states';
import Main from './components/Conditional/Main';



function App() {
  const name = "Vishnu narayanan";
  let number =-1;
  const message = () => {
    return "Good Morning";
  }
  const states = [
    {name: "Kerala", language: "Malayalalm", population: 1000},
    {name: "Tamil Nadu", language: "Tamil", population: 1400},
    {name: "Karnataka", language: "Kannada", population: 2000}
  ]

  return (
    <div className='bg-dark'>
      <Container className='bg-info'> 
        <div className='App'>
        
          <Main isLoggedin={true}/>
          <Header />
          <Home  />
          <br/>
          <br/>

          <br/>
          <br/>
          <States states={states} />

        </div>
      </Container>
    </div>


  );
}


 
export default App;
