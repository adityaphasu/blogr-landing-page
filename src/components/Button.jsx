import React from "react";

export default function Button({ text, className }) {
  return (
    <button className={`${className} rounded-full  py-3 text-base font-medium transition duration-700`}>{text}</button>
  );
}
