import { Component, mergeProps, splitProps } from "solid-js";
import Button from "../Button";
import "./styles.css";
import ctaImage from "@/assets/cta-neon.png";

type Props = {
  title?: string;
};

const Cta: Component<Props> = (props) => {
  const [local] = splitProps(
    mergeProps(
      {
        title: "",
      },
      props
    ),
    ["title"]
  );

  return (
    <section class="cta">
      <img src={ctaImage} alt="Neonowy kaktus" class="cta__image" />
      <div class="cta__content">
        <div class="cta__inner">
          <div class="content-wrapper">
            <div class="cta__wrapper">
              <h1 class="cta__title">{local.title}</h1>
              <Button>
                <span>AKCJA</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
