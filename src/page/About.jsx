import React from "react";
import user from "../assets/dustin.jpg";
import autograph from "../assets/autograph.png";
const About = () => {
  return (
    <div className="lg:flex  max-w-6xl gap-7  ">
      <img
        className="border-[10px] border-white/10"
        src={user}
        alt=""
        srcset=""
      />
      <div className="space-y-10 pt-4">
        <h1 className="text-5xl  text-white/80 tracking-widest -translate-x-[75px]">
          DUSTIN FARRELL
        </h1>
        <p className="text-white/40  font-light  tracking-wide">
          Creating images that awe and entertain has been Dustin Farrell’s focus
          throughout his career. A veteran in nearly all genres of the film and
          television industry, Dustin has developed a unique look that is
          unmistakable. He specializes in slow motion cinematography and motion
          control time-lapse. He is an Owner/Operator of the Vision Research
          Phantom Flex4K. In addition we also own and operate a Sony FS7, Sony
          FS5, Red Dragon, Freefly Mōvi Pro system, Highsight Cablecam, motion
          control camBLOCK Adventure and Dana Dolly. He is a certified Phantom
          Tech and has underwater Camera Op experience.
        </p>
        <img src={autograph} alt="autograph" />
      </div>
    </div>
  );
};

export default About;
