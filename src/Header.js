import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

function Header({ backButton }) {
  const history = useHistory();

  return (
    <div className="header">
      {backButton ? (
        <Link>
          <IconButton onClick={() => history.replace(backButton)}>
            <ArrowBackIcon className="header__icon" fontSize="large" />
          </IconButton>
        </Link>
      ) : (
        <IconButton>
          {" "}
          <PersonIcon className="header__icon" fontSize="large" />{" "}
        </IconButton>
      )}

      <Link to="/">
        <img
          className="header__logo"
          src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
          alt="tinder logo"
        />
      </Link>
      <Link to="/chat">
        <IconButton>
          <ForumIcon className="header__icon" fontSize="large" />{" "}
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
