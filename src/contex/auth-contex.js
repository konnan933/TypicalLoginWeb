import React from "react";
import react from "react";

const AuthContex = React.createContext({
  isLoggedIn: false,
  onLogout: () => false,
});

export default AuthContex;
