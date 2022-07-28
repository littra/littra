import React, { useEffect } from "react";
import {
  PerspectiveCamera,
  Scene,
  Particle,
  ParticleCanvasMaterial,
  CanvasRenderer
} from "three";
import styles from "./three.css";

const Three = () => {
  var SEPARATION = 100,
    AMOUNTX = 100,
    AMOUNTY = 70;

  var container;
  var outerContainer;
  var camera, scene, renderer;

  var particles,
    particle,
    count = 0;

  var mouseX = 85,
    mouseY = -842;

  var windowHalfX = window.innerWidth / 2;
  var windowHalfY = window.innerHeight / 2;

  useEffect(() => {
  
    if (typeof window == "undefined") return;
    init();
  }, [typeof window]);

  function init() {
    if (typeof document == "undefined") return;
 

    const parentId = document.getElementById("particleThreeJsHoverBase");
  
    outerContainer = document.createElement("div");
    parentId.appendChild(outerContainer);
    container = document.createElement("div");
    outerContainer.appendChild(container);
    outerContainer.classList.add("outerContainer");
    const list = outerContainer.classList.contains("outerContainer");


    camera = new PerspectiveCamera(
      120,
      window.innerWidth / window.innerHeight,
      1,
      10000
    );
    camera.position.z = 1000;

    scene = new Scene();

    particles = new Array();

    var PI2 = Math.PI * 2;
    var material = new ParticleCanvasMaterial({
      color: 0xe1e1e1,
      program: function(context) {
        context.beginPath();
        context.arc(0, 0, 0.6, 0, PI2, true);
        context.fill();
      }
    });

    var i = 0;

    for (var ix = 0; ix < AMOUNTX; ix++) {
      for (var iy = 0; iy < AMOUNTY; iy++) {
        particle = particles[i++] = new Particle(material);
        particle.position.x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
        particle.position.z = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;
        scene.add(particle);
      }
    }

    renderer = new CanvasRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    document.addEventListener("mousemove", onDocumentMouseMove, false);
    document.addEventListener("touchstart", onDocumentTouchStart, false);
    document.addEventListener("touchmove", onDocumentTouchMove, false);

    //

    window.addEventListener("resize", onWindowResize, false);
    animate();
  }

  function onWindowResize() {
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  //

  function onDocumentMouseMove(event) {
    mouseX = event.clientX - windowHalfX;
    mouseY = event.clientY - windowHalfY;
  }

  function onDocumentTouchStart(event) {
    if (event.touches.length === 1) {
      event.preventDefault();

      mouseX = event.touches[0].pageX - windowHalfX;
      mouseY = event.touches[0].pageY - windowHalfY;
    }
  }

  function onDocumentTouchMove(event) {
    if (event.touches.length === 1) {
      event.preventDefault();

      mouseX = event.touches[0].pageX - windowHalfX;
      mouseY = event.touches[0].pageY - windowHalfY;
    }
  }

  //

  function animate() {
    requestAnimationFrame(animate);

    render();
  }

  function render() {
    camera.position.x += (mouseX - camera.position.x) * 0.05;
    camera.position.y += (-mouseY - camera.position.y) * 0.05;
    camera.lookAt(scene.position);

    var i = 0;

    for (var ix = 0; ix < AMOUNTX; ix++) {
      for (var iy = 0; iy < AMOUNTY; iy++) {
        particle = particles[i++];
        particle.position.y =
          Math.sin((ix + count) * 0.3) * 50 + Math.sin((iy + count) * 0.5) * 50;
        particle.scale.x = particle.scale.y =
          (Math.sin((ix + count) * 0.3) + 1) * 2 +
          (Math.sin((iy + count) * 0.5) + 1) * 2;
      }
    }

    renderer.render(scene, camera);

    count += 0.1;
  }

  return (
    <div
      id="particleThreeJsHoverBase"
      className={styles.particleThreeJsHoverBase}
    >
   <div className={styles.title}>
   <h1 style={{fontSize:'80px'}} >WELCOME TO LITTRA</h1>
    
    <p style={{fontSize:'30px'}}> Good business leaders create a vision, articulate the vision, passionately own the vision, and relentlessly drive it to completion.</p>
    
   </div>
    </div>
  );
};

export default Three;