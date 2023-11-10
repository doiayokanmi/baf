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

        <div className="flex flex-col lg:flex-row border border-16">
          <div className="basis-1/2">
            <Video videoSrc="/video/omoluabi.mp4" />
          </div>
          <div className="basis-1/2 relative bg-secondary text-white font-bold italic flex justify-center items-center text-center p-4 text-2xl">
            <p className="text-red-700 text-9xl absolute top-4 left-4 ">
              &quot;
            </p>{" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fugiat
            asperiores ipsam accusantium dolorem cumque ex cum. Neque,
            temporibus perspiciatis. Eos ad sequi ab libero doit mollitia
            deleniti soluta doloribus.{" "}
            <p className="text-red-700 text-9xl absolute -bottom-8 right-8">&quot;</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedVideo;
