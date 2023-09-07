import React, {useState} from 'react';
import headerCss from "./Header.module.css";
import {Button, Accordion} from 'react-bootstrap';
 


const Header = () => {

  const clickHandle = () =>{
    console.log("click me clicked!!");
  }

  const doubleClickHandle = (name) =>{
    alert("Hello " + name)
  }

  const onKeyDownHandle = (name) =>{
    alert("Hello " + name)
  }

  const [colour, setColour] = useState("Yellow");
  const [count, setCount] = useState(0)

  const incriment = () => {
    setCount(count +1)

  };

  const decriment = () =>{
    setCount(count - 1)
  };

  const changeColour = () =>{
    setColour("red")
  }

  return (
    <>

      <h1>hello world</h1>
      <Button variant="success" onClick={clickHandle}>Click Me</Button>{' '}
      <input type='text' onKeyDown={onKeyDownHandle}  />
      <Button variant="warning" onDoubleClick={() => doubleClickHandle("vishnu")}>On Double click</Button>{' '}
      <br/>
      <br/>
      <h1>my favourite color is {colour}</h1>
      <Button variant="success" onClick={changeColour} >Click to change the color</Button>{' '}
      <br/>
      <br/> 
      <h1>counter is {count}</h1>
      <Button onClick={incriment} className='m-2 bg-success' >+</Button>{' '}
      <Button onClick={decriment} className='m-2 bg-danger' >-</Button>{' '}
      <br/>
      <br/>

      <div className={headerCss.divHeader}>
        <h1 className={headerCss.header}>Header </h1>
        <p className={headerCss.paragraph}>
            Lorem Ipsum is simply dummy text of 
            the printing and typesetting industry.
             Lorem Ipsum has been the industry's 
             standard dummy text ever since the 1500s, 
             when an unknown printer took a galley of 
             type and scrambled it to make a type 
             specimen book. It has survived not only 
             five centuries, but also the leap into 
             electronic typesetting, remaining essentially 
             unchanged. It was popularised in the 1960s 
             with the release of Letraset sheets containing 
             Lorem Ipsum passages, and more recently 
             with desktop publishing software like Aldus 
             PageMaker including versions of Lorem Ipsum.
        </p>

      </div>



    </>

  )
}

export default Header
