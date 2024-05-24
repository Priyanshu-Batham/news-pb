import React from "react";

const CategoryStrip = (props) => {

  return (
    <>
      <ul className="nav nav-underline justify-content-center">
        <li className="nav-item" onClick={()=>{
          props.setCategory('');
          }}>
          <a className={`nav-link ${props.category===''?'active':''}`} 
          aria-current="page" href="#"
          style={{color: 'white'}}
          >
            Top Headlines
          </a>
        </li>
        <li className="nav-item" onClick={()=>{
          props.setCategory('sports');
        }}>
          <a className={`nav-link ${props.category==='sports'?'active':''}`} style={{color: 'white'}} href="#">
            Sports
          </a>
        </li>
        <li className="nav-item" onClick={()=>{
          props.setCategory('entertainment');
        }}>
          <a className={`nav-link ${props.category==='entertainment'?'active':''}`} style={{color: 'white'}} href="#">
            Entertainment
          </a>
        </li>
        <li className="nav-item" onClick={()=>{
          props.setCategory('technology');
        }}>
          <a className={`nav-link ${props.category==='technology'?'active':''}`} style={{color: 'white'}} href="#">
            Technology
          </a>
        </li>
      </ul>
    </>
  );
};

export default CategoryStrip;
