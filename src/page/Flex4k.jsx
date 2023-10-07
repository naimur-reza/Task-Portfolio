import React from "react";
import camera from "../assets/phantom-camera.png";
import feature from "../assets/4k.png";
import feature1 from "../assets/4k1.png";
import feature2 from "../assets/4k2.png";
const Flex4k = () => {
  return (
    <div>
      <img src={camera} className="absolute left-0 bottom-0 w-[45%]" alt="" />

      <div className="max-w-[390px] -translate-x-[-50%] text-white ml-[64px] -translate-y-14  text-center">
        <h1 className="text-5xl mb-10  tracking-widest">PHANTOM FLEX 4K</h1>
        <p className="leading-7 text-[17px] text-white/40 text-justify">
          <span className="text-white">Phantom Flex4K</span> If you had to
          choose one camera in all of the world for your slow motion shoot it
          should be the . Because of the Flex4K’s reputation as the industry’s
          best <span className="text-white">4K high speed camera</span> and our
          love for slowmo, we couldn’t resist adding it to our arsenal. Capable
          of <span className="text-white">1000fps</span> in 4K 12 bit raw, there
          is no longer a sacrifice in frame rate OR quality when shooting slow
          motion footage. DFVC’s Flex has 128gb of internal ram for maximum
          real-time recording capture and is available with two{" "}
          <span className="text-white">2TB Cinemags</span>. Director of
          Photography, Dustin Farrell, is also a certified Phantom Tech. Being
          one of the few owner/operators of the Flex4K in the world, you will be
          in good hands with Dustin on set. If it is just a rental you are
          looking for, you can rest assured the camera will be properly prepped
          for your DP and Phantom Tech.
        </p>
        <div className="flex items-center justify-evenly mt-6">
          <div>
            <img src={feature} alt="feature" />
          </div>
          <div>
            <img src={feature1} alt="feature" />
          </div>
          <div>
            <img src={feature2} alt="feature" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flex4k;
