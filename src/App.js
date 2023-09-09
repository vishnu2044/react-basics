import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import States from './components/states';
import Main from './components/Conditional/Main';
import Keys from './components/Keys/keys';
import Effects from './components/Effects/Effects';
import MainRouter from './components/ReactRouter/MainRouter';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function App() {
  const [posts, setPosts] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => setPosts(posts.splice(0,20)))

  }, [])


  const states = [
    {id:10, name: "Kerala", language: "Malayalalm", population: 1000},
    {id:20, name: "Tamil Nadu", language: "Tamil", population: 1400},
    {id:30, name: "Karnataka", language: "Kannada", population: 2000}
  ]

  return (
    <MainRouter />
    // <div className='bg-dark'>
    //   <Container className='bg-info'> 
    //     <div className='App'>
        
    //       <Main isLoggedin={true}/>
    //       <Keys />
    //       <Effects />
    //       <Header />
    //       <Home  />
    //       <br/>
    //       <br/>
    //       <div className='bg-success'>
    //         <h3 className='bg-dark text-white'>Fetch API data</h3>
    //         <div className=''>
    //         {posts.map((post)=>

    //           <Card className="d-inline-flex" style={{ width: '18rem'}} key={post.id}>
    //             <Card.Body style={{ height: '20rem'}}>
    //                 <Card.Title>{post.title}</Card.Title>
    //                 <Card.Text>{post.body}</Card.Text>
    //                 <Button variant="primary">get full details</Button>
    //               </Card.Body>
    //             </Card>
 
    //         )}
    //         </div>

    //       </div>


    //       <br/>
    //       <br/>
    //       <States states={states} />

    //     </div>
    //   </Container>
    // </div>


  );
}


 
export default App;
