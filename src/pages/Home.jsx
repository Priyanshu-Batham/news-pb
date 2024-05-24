import React from "react";
import {Link} from 'react-router-dom'
import Banner from "../assets/logo.png";

const Home = () => {
  return (
    <>
      <div className="container d-flex flex-column align-items-center justify-content-center">
        <h1 className="mt-5">Welcome To</h1>
        <img src={Banner} alt="News-Pb" width={"100%"} height={"100%"} />
        <button type="button" className="btn btn-info">
          <Link to="/news" style={{textDecoration: 'none', color: 'black'}}>
            <h1>Read News</h1>
          </Link>
        </button>
      </div>
    </>
  );
};

export default Home;
