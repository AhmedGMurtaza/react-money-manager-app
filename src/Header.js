import React from 'react';
import { Link } from 'react-router-dom';

const Header = () =>{
    return(
      <header>
        <div className="wrapper">
          <h1>My Money Manager</h1>
        </div>
        <nav className="header-nav">
            <ul>
              <li><Link to="/">Home</Link></li>  
              <li><Link to="/expenses">Expenses</Link></li>  
            </ul>
          </nav>
      </header>
    );
  }
  
  export default Header;