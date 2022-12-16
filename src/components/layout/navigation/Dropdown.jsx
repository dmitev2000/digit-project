import { Link, useNavigate } from "react-router-dom";
import "./Dropdown.css";

const Dropdown = ({ name, elements, path }) => {
  const navigate = useNavigate();

  const navigateHandler = (e) => {
    e.preventDefault();
    navigate(path);
  };
  return (
    <div className="dropdown">
      <button className="dropbtn" onClick={navigateHandler}>{name}</button>
      <div className="dropdown-content">
        {elements &&
          elements.map((element, index) => {
            return (
              <Link to={element[1]} key={index}>
                {element[0]}
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Dropdown;
