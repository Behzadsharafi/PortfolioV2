import React, { useEffect, useRef, useState } from "react";
import styles from "./Cube.module.scss";

const Cube = ({ size, bottom, left, rotationSpeed, icon }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const cubeRef = useRef(null);

  const rotateCube = (e) => {
    if (cubeRef.current) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;

      const cubeRect = cubeRef.current.getBoundingClientRect();
      const cubeCenterX = cubeRect.left + cubeRect.width / 2;
      const cubeCenterY = cubeRect.top + cubeRect.height / 2;

      let x = clientX - cubeCenterX;
      let y = clientY - cubeCenterY;

      x = x * rotationSpeed;
      y = -y * rotationSpeed;

      setRotation({ x, y });
    }
  };

  useEffect(() => {
    const mousemoveListener = (e) => {
      rotateCube(e);
    };

    const touchmoveListener = (e) => {
      rotateCube(e);
    };

    document.addEventListener("mousemove", mousemoveListener);
    document.addEventListener("touchmove", touchmoveListener);

    const interval = setInterval(() => {
      // Simulate automatic motion when there's no user interaction
      setRotation((prevRotation) => ({
        x: prevRotation.x + 0.5, // Adjust the rotation speed as needed
        y: prevRotation.y + 0.5, // Adjust the rotation speed as needed
      }));
    }, 30);

    return () => {
      document.removeEventListener("mousemove", mousemoveListener);
      document.removeEventListener("touchmove", touchmoveListener);
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className={styles.cube}
      style={{
        transform: `rotateY(${rotation.x}deg) rotateX(${rotation.y}deg)`,
        bottom: window.innerHeight * bottom,
        left: window.innerWidth * left,
        height: size + window.innerWidth * 0.03,
        width: size + window.innerWidth * 0.03,
      }}
      ref={cubeRef}
    >
      <img className={styles.face} src={icon} alt="Icon" />
    </div>
  );
};

export default Cube;
