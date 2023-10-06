import React from "react";
import logo from "../assets/logo.svg";
const Home = () => {
  return (
    <div className="w-[420px] h-[420px] relative">
      <img
        className="w-full h-full "
        src="https://dfvc.com/wp-content/themes/dfvc/dist/images/large_circle.svg"
        alt=""
      />
      <img
        className="w-full h-full absolute inset-0"
        src="https://dfvc.com/wp-content/themes/dfvc/dist/images/medium_circle.svg"
        alt=""
      />
      <img
        className="full h-full absolute inset-0"
        src="https://dfvc.com/wp-content/themes/dfvc/dist/images/small_circle.svg"
        alt=""
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <img src={logo} className="w-32" alt="" />
      </div>
    </div>
  );
};

export default Home;
