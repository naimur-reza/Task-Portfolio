import { BiLogoFacebook } from "react-icons/bi";
import { BsYoutube } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import logo from "../assets/logo.svg";

const Contact = () => {
  // todo
  return (
    <div className="text-white/50 text-center">
      <img className="w-24 mb-10 mx-auto" src={logo} alt="logo" />
      <div className="space-y-4">
        <h1 className="uppercase text-2xl text-white">arizona - worldwide</h1>
        <p>
          For job inquiries stock footage contact (name) at{" "}
          <span className="underline text-white">name@gmail.com</span>
        </p>
        <p>
          Phone: <span className="underline text-white">+99938 382 323</span>
        </p>
        <div className="flex items-center gap-5 z-10 justify-center pt-5">
          <BiLogoFacebook
            className="hover:text-white transition-all cursor-pointer"
            size={23}
          />
          <AiOutlineTwitter
            className="hover:text-white transition-all cursor-pointer"
            size={23}
          />
          <BsYoutube
            className="hover:text-white transition-all cursor-pointer"
            size={23}
          />
          <FaInstagram
            className="hover:text-white transition-all cursor-pointer"
            size={23}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
