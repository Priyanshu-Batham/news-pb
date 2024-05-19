import React from "react";

const CategoryStrip = () => {
  return (
    <>
      <ul class="nav nav-underline justify-content-center">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">
            Technology
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Sports
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Entertainment
          </a>
        </li>
      </ul>
    </>
  );
};

export default CategoryStrip;
