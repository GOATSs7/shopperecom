import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Review (123)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          consectetur adipisci deleniti quis consequatur quidem ullam et dolor
          perspiciatis repellendus a, ipsum, tempora molestiae, dolorem id
          dolorum aperiam! Dignissimos, nemo?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis ut
          perspiciatis aperiam aliquid inventore culpa quae qui temporibus earum
          quo.{" "}
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
