import React, { useEffect, useRef, useState } from "react";
import styles from "./Cube.module.scss";

const Cube = ({ size, bottom, left, rotationSpeed, icon, initialRotation }) => {
  const [rotation, setRotation] = useState({
    x: initialRotation,
    y: initialRotation,
  });
  const [mouseMoveTimer, setMouseMoveTimer] = useState(0);

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
      setMouseMoveTimer(0);
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
        x: (prevRotation.x + 0.5) % 360, // Adjust the rotation speed as needed
        y: (prevRotation.y + 0.5) % 360, // Adjust the rotation speed as needed
      }));

      setMouseMoveTimer((prevTimer) => prevTimer + 0.05);
    }, 50);
    return () => {
      document.removeEventListener("mousemove", mousemoveListener);
      document.removeEventListener("touchmove", touchmoveListener);
      clearInterval(interval);
    };
  }, []);

  const getTransition = () => {
    if (mouseMoveTimer >= 1) {
      return `none`;
    }
    return `all 0.6s ease-out`;
  };

  return (
    <div
      className={styles.cube}
      style={{
        transform: `rotateY(${rotation.x}deg) rotateX(${rotation.y}deg)`,
        transition: getTransition(),
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
