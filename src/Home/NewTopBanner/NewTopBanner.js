import React from "react";
import "./newtopbanner.css";
const NewTopBanner = () => {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/tsparticles@1.33.1/tsparticles.min.js";
    script.async = true;
    script.onload = () => {
      loadUiFrame();
    };
    document.body.appendChild(script);
  }, []);

  const loadUiFrame = () => {
    window.tsParticles.load("tsparticles", {
      fullScreen: {
        enable: true,
      },
      detectRetina: true,
      background: {
        color: "#000",
      },
      fpsLimit: 30,
      emitters: {
        direction: "top",
        life: {
          count: 0,
          duration: 0.1,
          delay: 0.1,
        },
        rate: {
          delay: 0.15,
          quantity: 1,
        },
        size: {
          width: 100,
          height: 65,
        },
        position: {
          y: 100,
          x: 50,
        },
      },
      particles: {
        number: {
          value: 0,
        },
        destroy: {
          mode: "split",
          split: {
            count: 1,
            factor: { value: 1 / 3 },
            rate: {
              value: 70,
            },
            particles: {
              stroke: {
                color: {
                  value: [
                    "#ffffff",
                    "#b22234",
                    "#b22234",
                    "#3c3bfe",
                    "#3c3bfe",
                    "#3c3bfe",
                  ],
                },
                width: 1,
              },
              number: {
                value: 0,
              },
              collisions: {
                enable: false,
              },
              opacity: {
                value: 1,
                animation: {
                  enable: true,
                  speed: 0.6,
                  minimumValue: 0.1,
                  sync: false,
                  startValue: "max",
                  destroy: "min",
                },
              },
              shape: {
                type: "circle",
              },
              size: {
                value: 1,
                animation: {
                  enable: false,
                },
              },
              life: {
                count: 1,
                duration: {
                  value: {
                    min: 1,
                    max: 2,
                  },
                },
              },
              move: {
                enable: true,
                gravity: {
                  enable: false,
                },
                speed: 2,
                direction: "none",
                random: true,
                straight: false,
                outMode: "destroy",
              },
            },
          },
        },
        life: {
          count: 1,
        },
        shape: {
          type: "line",
        },
        size: {
          value: 40,
          animation: {
            enable: true,
            sync: true,
            speed: 100,
            startValue: "max",
            destroy: "min",
          },
        },
        stroke: {
          color: {
            value: "#ffffff",
          },
          width: 1,
        },
        rotate: {
          path: true,
        },
        move: {
          enable: true,
          gravity: {
            acceleration: 12,
            enable: true,
            inverse: true,
            maxSpeed: 70,
          },
          speed: { min: 7, max: 15 },
          outModes: {
            default: "destroy",
            top: "none",
          },
          trail: {
            fillColor: "#000",
            enable: true,
            length: 10,
          },
        },
      },
    });
  };

  return <div id="tsparticles"></div>;
};

export default NewTopBanner;
