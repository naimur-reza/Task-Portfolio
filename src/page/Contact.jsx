import { BsFacebook } from "react-icons/bs";
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
        <div className="flex items-center gap-5 w-full justify-center">
          <BsFacebook size={20} />
          <AiOutlineTwitter size={20} />
          <BsYoutube size={20} />
          <FaInstagram size={20} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
