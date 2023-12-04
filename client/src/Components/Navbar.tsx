import { useState } from "react";

const Navbar = () => {
  const [isTodo, setIsTodo] = useState(true);
  const myStyle = {
    height: "2px",
    width: isTodo ? "100px" : "150px",
    backgroundColor: "grey",
  };
  const line = () => {
    return <div style={myStyle}></div>;
  };
  return (
    <div className="row">
      <nav id="navbar-example2" className="navbar px-3 mb-3">
        <ul className="nav nav-pills">
          <li className="nav-item mx-3">
            <a className="nav-link" onClick={() => setIsTodo(true)}>
              <h4>Todo</h4>
            </a>
            {isTodo && line()}
          </li>
          <li className="nav-item mx-3">
            <a className="nav-link" onClick={() => setIsTodo(false)}>
              <h4>Category</h4>
            </a>
            {!isTodo && line()}
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
