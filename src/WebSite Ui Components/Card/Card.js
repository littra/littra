import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";
import { interpolate } from "@popmotion/popcorn";
import "./Card.css";
import styles from "../../Home/Component/css/FeatureBanner.css";
import Icon from "../../general/Icon";
import { PUBLIC_ASSETS_PATH } from "../../Utils/Constants";
import Animation, { ANIMATE_FLAG } from "../Animation/Animation";

const Container = styled.div`
  border-radius: 8px;
  transform-style: preserve-3d;
  transform: perspective(921px);
  width: 300px;
  height: 400px;
  margin: 1.5rem;
`;

const Content = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  transform-style: preserve-3d;
  perspective: 800px;
  backface-visibility: hidden;
  padding: 15px;
  background-color: #2d3436;
  background-image: linear-gradient(45deg, #2d3436 0%, #000000 74%);
`;

const Shadow = styled.div`
  position: absolute;
  top: 5%;
  left: 5%;
  width: 90%;
  border-radius: 1rem;
  height: 90%;
  transition: all 0.2s ease-out 0s;
`;

const RelativeContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  overflow: hidden;
  transform-style: preserve-3d;
  perspective: 800px;
  backface-visibility: hidden;
`;

const Image = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  transform: translateZ(0);
  bottom: 0;
  background-size: cover;
  border-radius: 1rem;
  background-image: url(https://images.unsplash.com/photo-1571178109673-2686d60d6cba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80);
`;

const Gradient = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: all 0.9s ease;
`;

export function Card({ height = 400, width = 300, icon, title, description }) {
  // const ref = useRef();
  const [hover, setHover] = useState(false);
  const [tapped, setTapped] = useState(false);

  // middle point in 2d space [150, 250]
  const centerPoint = [width / 2, height / 2];
  const xy = useMotionValue(centerPoint);

  // how much should we rotate?
  const tx = 0.05;

  // get rotateY
  const transformX = interpolate([0, width], [width * tx, width * tx * -1]);
  const rotateY = useTransform(xy, ([x]) => transformX(x));

  // get rotateX
  const transformY = interpolate(
    [0, height],
    [height * tx * -1, height * tx * 1]
  );
  const rotateX = useTransform(xy, ([, y]) => transformY(y));

  const config = {
    stiffness: 150,
    damping: 20,
  };

  // get our spring values
  const springX = useSpring(rotateX, config);
  const springY = useSpring(rotateY, config);

  // this is a bit cumbersome...
  const gradientOpacity = useTransform(xy, ([, y]) => {
    return interpolate([0, height], [0, 0.3])(y);
  });

  const gradientOpacitySpring = useSpring(gradientOpacity, config);

  // how can we animate the degree using a spring too?
  const gradient = useTransform(gradientOpacitySpring, (opacity) => {
    // ideally we could also animate our degree value too...
    let [x, y] = xy.get();
    // whyy is this necessary? otherwise our center point renders the gradient
    // at -70? I'm too tired to do the math
    if (y === centerPoint[1]) {
      y = centerPoint[1] + 1;
    }

    const angle = Math.atan2(y - centerPoint[1], x - centerPoint[0]);
    const degree =
      ((angle > 0 ? angle : 2 * Math.PI + angle) * 360) / (2 * Math.PI) - 90;
    return `linear-gradient(${degree}deg, rgba(255,255,255,${opacity}), rgba(255,255,255,0) 80%)`;
  });

  function onMouseOver(e) {
    if (tapped) return;
    const rect = e.target.getBoundingClientRect();
    xy.set([e.clientX - rect.left, e.clientY - rect.top]);
  }

  function hoverStart() {
    setHover(true);
  }

  function hoverEnd() {
    setHover(false);
  }

  useEffect(() => {
    // if not hovering, reset to
    // our centerpoint.
    if (!hover) {
      xy.set(centerPoint);
    }
  }, [hover, xy, centerPoint]);

  return (
    <div>
      <Animation animate={ANIMATE_FLAG.SLIDE_SMOOTH_RIGHT}>
        <Container style={{ height: `${height}px`, width: `${width}px` }}>
          <Content
            style={{
              scale: 1,
              rotateX: springX,
              rotateY: springY,
            }}
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.97,
            }}
            onTapCancel={(e) => {
              setTapped(false);
              onMouseOver(e);
            }}
            onTapStart={() => {
              setTapped(true);
            }}
            onTap={(e) => {
              setTapped(false);
            }}
            onHoverStart={hoverStart}
            onHoverEnd={hoverEnd}
            onMouseMove={onMouseOver}
          >
            <Shadow hover={hover} />
            <RelativeContainer>
              <div className={styles.card}>
                <div className={styles.iconWrapper}>
                  <Icon
                    className={styles.icons}
                    image={`${PUBLIC_ASSETS_PATH}/${icon}`}
                    size={60}
                  />
                </div>

                <h2 className={styles.dark}> {title}</h2>
                <p className={styles.featureDes}> {description}</p>
              </div>
            </RelativeContainer>
            <Gradient
              style={{
                background: gradient,
                borderRadius: "16px",
              }}
            />
          </Content>
        </Container>
      </Animation>
    </div>
  );
}
