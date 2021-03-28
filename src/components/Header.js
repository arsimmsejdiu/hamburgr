import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import Hamburger from "./Hamburger";

const Header = ({ history }) => {
  //state for menu
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu",
  });

  //state for disabled button
  const [disabled, setDisabled] = useState(false);

  //UseEffect for page changes
  useEffect(() => {
    //Listen for page changes
    history.listen(() => {
      setState({ clicked: false, menuName: "Menu" });
    });
  });

  //function for opening ang closing the menu
  const hanleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close",
      });
      //console.log(1)
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu",
      });
      //console.log(2)
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close",
      });
      //console.log(3)
    }
  };

  //function that determine if the button should be disabled or not
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="inner-header">
            <div className="logo">
              <Link to="/">HAMBRG.</Link>
            </div>
            <div className="menu">
              <button disabled={disabled} onClick={hanleMenu}>
                Menu
              </button>
            </div>
          </div>
        </div>
      </div>
      <Hamburger state={state} />
    </header>
  );
};

export default withRouter(Header);
