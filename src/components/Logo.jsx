import React from "react";
import img from "../assets/images/logo.svg";

export default function Logo({ className }) {
  return (
    <a href="#">
      <img src={img} alt="Blogr" className={`m-auto ${className}`} />
    </a>
  );
}
