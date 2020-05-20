import React from "react";
import "./App.css";
import Logo from "./components/Logo/Logo";
import Nav from "./components/Nav/Nav";
import CartLink from "./components/CartLink/CartLink";

function App() {
  return (
    <div className="App">
      <nav>
        <Logo />
        <Nav />
        <CartLink />
      </nav>
      <main>Book Shop by Bolotova Gulzada</main>
    </div>
  );
}
export default App;
