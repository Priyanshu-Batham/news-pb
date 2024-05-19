import React from "react";
import CategoryStrip from "../components/CategoryStrip";
import Card from "../components/Card";

const News = () => {
  return (
    <div className="bg-secondary">
      <CategoryStrip />
      <div className="container bg-dark text-light">
        <h1 className="text-center py-5">This is a News Page</h1>

        <div className="container d-flex flex-wrap justify-content-around align-items-center">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          
          <Card/>
        </div>
      </div>
    </div>
  );
};

export default News;
