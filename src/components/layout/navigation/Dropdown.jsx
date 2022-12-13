import React, { useState } from "react";
import { useEffect } from "react";
import "./Dropdown.css";

const Dropdown = ({ name, elements }) => {
    const [links, setLinks] = useState();

    useEffect(() => {
        setLinks(elements);
    }, [elements])

  return (
    <div className="dropdown">
      <button className="dropbtn">
        {name}
      </button>
      <div className="dropdown-content">
        {links && links.map((element, index) => {
            return <a key={index} href="#!">{element}</a>
        })}
    </div>
    </div>
  );
};

export default Dropdown;
