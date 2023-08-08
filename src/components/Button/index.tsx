import "./styles.css";
import { Component, JSX, mergeProps, splitProps } from "solid-js";

type Props = JSX.HTMLAttributes<HTMLButtonElement>;

const Button: Component<Props> = (props) => {
  const [local, others] = splitProps(
    mergeProps(
      {
        class: "",
      },
      props
    ),
    ["class"]
  );

  return (
    <button
      class="button"
      classList={{ [local.class]: !!local.class }}
      {...others}
    ></button>
  );
};

export default Button;
