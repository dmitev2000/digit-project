import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Dropdown.css";

const Dropdown = ({ name, elements, path }) => {
    const [links, setLinks] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        setLinks(elements);
    }, [elements])

    const navigateHandler = (e) => {
      e.preventDefault();
      navigate(path);
    }
  return (
    <div className="dropdown" onClick={navigateHandler}>
      <button className="dropbtn">
        {name}
      </button>
      <div className="dropdown-content">
        {links && links.map((element, index) => {
            return <Link to={element[1]} key={index} href="#!">{element[0]}</Link>
        })}
    </div>
    </div>
  );
};

export default Dropdown;
