import React from "react";
import { motion } from "framer-motion";

const Video = () => {
  return (
    <motion.iframe initial={{scale:1.03}} whileHover={{scale:1}}
      className="w-full"
      height="315"
      src="https://www.youtube.com/embed/cxPGYYilH1E?si=LsNSSUcKk7Wdee5_"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></motion.iframe>
  );
};

export default Video;
