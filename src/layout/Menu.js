import React from "react";
import { Link } from "react-router-dom";

import { Button } from "@material-ui/core";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import BackupIcon from "@material-ui/icons/Backup";
import EmailIcon from "@material-ui/icons/Email";

function Menu() {
  return (
    <div style={menuStyle}>
      <Link to="/" style={linkStyle}>
        <Button
          className="menu-button"
          color="primary"
          startIcon={<MenuBookIcon />}
        >
          Todos
        </Button>
      </Link>
      <Link to="/back-up" style={linkStyle}>
        {" "}
        <Button
          className="menu-button"
          color="primary"
          startIcon={<BackupIcon />}
        >
          Back-up
        </Button>
      </Link>
      <Link to="/e-mail" style={linkStyle}>
        {" "}
        <Button
          className="menu-button"
          color="primary"
          startIcon={<EmailIcon />}
        >
          E-mail
        </Button>
      </Link>
    </div>
  );
}

const menuStyle = {
  width: "100%",
  height: "100%"
};

const linkStyle = {
  display: "block",
  height: "48px",
  textDecoration: "none"
};

export default Menu;
