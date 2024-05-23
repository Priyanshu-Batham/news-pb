import React from "react";

const CategoryStrip = (props) => {

  return (
    <>
      <ul className="nav nav-underline justify-content-center">
        <li className="nav-item" onClick={()=>{
          props.setCategory('');
          }}>
          <a className={`nav-link ${props.category===''?'active':''}`} aria-current="page" href="#">
            Top Headlines
          </a>
        </li>
        <li className="nav-item" onClick={()=>{
          props.setCategory('sports');
        }}>
          <a className={`nav-link ${props.category==='sports'?'active':''}`} href="#">
            Sports
          </a>
        </li>
        <li className="nav-item" onClick={()=>{
          props.setCategory('entertainment');
        }}>
          <a className={`nav-link ${props.category==='entertainment'?'active':''}`} href="#">
            Entertainment
          </a>
        </li>
        <li className="nav-item" onClick={()=>{
          props.setCategory('technology');
        }}>
          <a className={`nav-link ${props.category==='technology'?'active':''}`} href="#">
            Technology
          </a>
        </li>
      </ul>
    </>
  );
};

export default CategoryStrip;
