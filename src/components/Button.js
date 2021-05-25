import React from "react";

function Button({ href, nameButton, className }) {
  return (
    <>
      <a href={href} className={className} target="blank">
        {nameButton} <i className="fas fa-caret-right"></i>
      </a>
    </>
  );
}

export default Button;
