import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Video from "./Video";

const FeaturedVideo = () => {
  const container = useRef(null);
  const isInView = useInView(container);

  return (
    <>
      <section ref={container} className="lg:px-24 p-4 lg:py-8">
        <motion.h1
          initial={{ x: 1400 }}
          animate={{ x: 0 }}
          exit={{ x: 1400 }}
          transition={{ duration: 1 }}
          className="text-3xl text-gray-500 font-extrabold capitalize py-4"
        >
          Featured video
        </motion.h1>

        <div className="flex flex-col lg:flex-row-reverse border border-16">
          <div className="basis-2/3 bg-primary overflow-hidden">
            <Video />
          </div>
          <div className="basis-1/3 relative bg-secondary text-white font-bold italic flex flex-col space-y-8 p-4 ">
            <p className="text-red-700">
              Video
            </p>{" "}
            <p className="text-lg lg:text-2xl">
            Senator AbdulFatai Buhari talking about APC Crisis in Oyo State With | Edmund Obilo | State Affairs
            </p> {" "}
            <p>24 September 2020</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedVideo;
