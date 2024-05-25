import React from "react";

const About = () => {
  return (
    <div
      className="bg-secondary d-flex justify-content-center"
      style={{ minHeight: "93.5vh" }}
    >
      <div className="container bg-dark d-flex flex-column justify-content-center align-items-center">
        <h1 className="text-light mb-5 display-1">About News-Pb</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                What is News-Pb?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>News-pb</strong> is a free to use single page application that allows users to read news from various sources.
                It is built using React and bootstrap.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Where do the news come from?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>News-Pb</strong> uses the <a href="https://newsapi.org/">News API</a> to fetch news from various sources.
                The News API is a RESTful API for searching and retrieving live articles from all over the web.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                About the Developer
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>News-Pb</strong> is developed by <a href="https://github.com/priyanshu-batham">Priyanshu Batham</a>.

              </div>
            </div>
          </div>
        </div>
        <div>
          <a href="https://github.com/priyanshu-batham" className="btn btn-primary mt-3">
            Follow on Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
