import { Component } from "solid-js";
import Tile from "../Tile";
import "./styles.css";

const Tiles: Component = () => {
  return (
    <section class="tiles">
      <div class="content-wrapper">
        <div class="tiles__inner">
          <h2 class="tiles__title">Podsekcja</h2>
          <div class="tiles__wrapper">
            <Tile title="Przykładowy tekst" icon="add-user" />
            <Tile title="Przykładowy tekst" icon="money" secondary />
            <Tile title="Przykładowy tekst" icon="happy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tiles;
