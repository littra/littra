import React from "react";
import "./ImageBgEffect.css";
function ImageBgEffect() {
  var pos = document.documentElement;
  pos.addEventListener("mousemove", (e) => {
    pos.style.setProperty("--x", e.clientX + "px");
    pos.style.setProperty("--y", e.clientY + "px");
  });

  return (
    <div className="main">
      <section></section>
    </div>
  );
}

export default ImageBgEffect;
