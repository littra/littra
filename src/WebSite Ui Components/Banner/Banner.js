import React from "react";
import { PUBLIC_ASSETS_PATH } from "../../Utils/Constants";
import BackgroundParticles from "../ParticleJs/Particles";
import styles from "./Banner.css";
function Banner() {
  var pos = document.documentElement;
  pos.addEventListener("mousemove", (e) => {
    pos.style.setProperty("--x", e.clientX + "px");
    pos.style.setProperty("--y", e.clientY + "px");
  });

  return (
    <>
      <div className={styles.main}>
        <section
          style={{
            backgroundImage: `url(${PUBLIC_ASSETS_PATH}/${"bannerImg4.jpg"})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></section>
        <div
          style={{
            position: "absolute",
            width: "210vh",
            overflow: "hidden",
          }}
        >
          <BackgroundParticles />
        </div>
      </div>
    </>
  );
}

export default Banner;
