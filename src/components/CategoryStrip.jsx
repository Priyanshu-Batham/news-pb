import React from "react";

const CategoryStrip = (props) => {

  return (
    <>
      <ul className="nav nav-underline justify-content-center">
        <li className="nav-item" onClick={()=>{
          props.setCategroy('');
          props.fetchNews();
          }}>
          <a className={`nav-link ${props.category===''?'active':''}`} aria-current="page" href="#">
            Top Headlines
          </a>
        </li>
        <li className="nav-item" onClick={()=>{
          props.setCategroy('sports');
          props.fetchNews('sports');
        }}>
          <a className={`nav-link ${props.category==='sports'?'active':''}`} href="#">
            Sports
          </a>
        </li>
        <li className="nav-item" onClick={()=>{
          props.setCategroy('entertainment');
          props.fetchNews('entertainment');
        }}>
          <a className={`nav-link ${props.category==='entertainment'?'active':''}`} href="#">
            Entertainment
          </a>
        </li>
        <li className="nav-item" onClick={()=>{
          props.setCategroy('technology');
          props.fetchNews('technology');
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
