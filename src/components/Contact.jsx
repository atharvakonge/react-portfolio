import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Get in Touch</h2>
      <div className="my-5 flex justify-center items-center border-neutral-300 rounded flex-col text-sm sm:text-base md:text-lg text-purple-300 ">
        <p>Atharva Konge</p>
        <p>Northeastern University</p>
        <p>360 Huntington Ave, Boston, MA 02115, US</p>
        {/* <p>360 Huntington Ave, Boston,</p>
        <p>MA 02115, United States</p> */}
        <a href="mailto:atharvakonge98@gmail.com">atharvakonge98@gmail.com</a>
        <div className="m-4 flex item-start justify-center gap-8 text-2xl cursor-pointer">
          <a href="https://www.linkedin.com/in/atharva-konge/" target="_blank">
            <FaLinkedin />
          </a>
          <a href="https://github.com/atharvakonge" target="_blank">
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
