import React, { useState } from "react";
import logo from "../assets/logo.svg";
import "./Home.css"; // Import your custom CSS file

const Home = () => {
  const [rotations, setRotations] = useState({
    large: 0,
    medium: 0,
    small: 0,
  });

  const handleMouseMove = (e) => {
    const container = e.currentTarget;
    const centerX = container.offsetWidth / 2;
    const centerY = container.offsetHeight / 2;
    const mouseX = e.clientX - container.getBoundingClientRect().left;
    const mouseY = e.clientY - container.getBoundingClientRect().top;

    const angle =
      Math.atan2(mouseY - centerY, mouseX - centerX) * (180 / Math.PI);

    // Calculate rotation degrees for each lens (adjust these values as needed)
    const largeRotation = angle * 0.1; // Adjust the factor for the large lens
    const mediumRotation = angle * 0.8; // Adjust the factor for the medium lens
    const smallRotation = angle * -0.7; // Adjust the factor for the small lens

    setRotations({
      large: largeRotation,
      medium: mediumRotation,
      small: smallRotation,
    });
  };

  return (
    <div
      className="w-[480px] h-[480px] relative lense group transition-transform transform disabled select-none"
      onMouseMove={handleMouseMove}>
      <img
        draggable={false}
        className="w-full h-full lense-large"
        src="https://dfvc.com/wp-content/themes/dfvc/dist/images/large_circle.svg"
        alt=""
        style={{ transform: `rotate(${rotations.large}deg)` }}
      />
      <img
        draggable={false}
        className="w-full h-full absolute inset-0 lense-medium"
        src="https://dfvc.com/wp-content/themes/dfvc/dist/images/medium_circle.svg"
        alt=""
        style={{ transform: `rotate(${rotations.medium}deg)` }}
      />
      <img
        draggable={false}
        className="full h-full absolute inset-0 lense-small"
        src="https://dfvc.com/wp-content/themes/dfvc/dist/images/small_circle.svg"
        alt=""
        style={{ transform: `rotate(${rotations.small}deg)` }}
      />
      <div className="absolute inset-0 flex items-center justify-center logo">
        <img draggable={false} src={logo} className="w-32" alt="" />
      </div>
    </div>
  );
};

export default Home;
