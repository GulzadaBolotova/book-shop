import React from "react";
import Logo from "../../components/Logo/Logo";
import Nav from "../../components/Nav/Nav";
import CartLink from "../../components/CartLink/CartLink";
import "./Layout.css";
import Drawer from "../../components/Drawer/Drawer";

export default ({ children }) => {
  return (
    <div className="Layout">
      <nav>
        <Logo />
        <Nav />
        <CartLink />
      </nav>
      <Drawer />
      <main>{children}</main>
    </div>
  );
};
