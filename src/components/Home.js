import React from 'react';
import Child from './child';
import homeCss from "./Home.module.css";
import buttonCss from './button.module.css';
import TableFn from './Table';
import Additional from './Additional';

const Home = () => {
  return (
    <div className={homeCss.home}>
        <h1>Home component</h1>
        <Child />
        <TableFn />
        <Additional/>
        <button type='' className={buttonCss.loginBtn} >Log in</button>
        <button type='' className={buttonCss.logoutBtn} >Log out</button>
    </div>
  )
}

export default Home