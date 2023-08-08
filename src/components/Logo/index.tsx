import { Component } from "solid-js";
import "./styles.css";

const Logo: Component = () => {
  return (
    <a href="/" class="logo__container">
      <div class="logo__circle"></div>
      <div class="logo__text">LOGO</div>
    </a>
  );
};

export default Logo;
