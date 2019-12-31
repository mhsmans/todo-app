import React from "react";
import { Link } from "react-router-dom";

import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import BackupIcon from "@material-ui/icons/Backup";
import EmailIcon from "@material-ui/icons/Email";

function MobileMenu() {
  return (
    <BottomNavigation showLabels style={mobileMenuStyle}>
      <BottomNavigationAction
        label="Todos"
        icon={<MenuBookIcon />}
        component={Link}
        to="/"
      />
      <BottomNavigationAction
        label="Back-up"
        icon={<BackupIcon />}
        component={Link}
        to="/back-up"
      />
      <BottomNavigationAction
        label="E-mail"
        icon={<EmailIcon />}
        component={Link}
        to="/e-mail"
      />
    </BottomNavigation>
  );
}

const mobileMenuStyle = {
  position: "fixed",
  bottom: 0,
  width: "100%"
};

export default MobileMenu;
