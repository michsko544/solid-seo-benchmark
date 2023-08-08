import { Component, mergeProps, splitProps } from "solid-js";
import "./style.css";

type Props = {
  direction?: "left" | "right";
};

const Dots: Component<Props> = (props) => {
  const [local] = splitProps(
    mergeProps(
      {
        direction: "right",
      },
      props
    ),
    ["direction"]
  );

  return (
    <div class="dots" classList={{ "dots--right": local.direction === "left" }}>
      <div class="dot__long"></div>
      <div class="dot__tight"></div>
    </div>
  );
};

export default Dots;
