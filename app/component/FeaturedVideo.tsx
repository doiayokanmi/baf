import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

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
          <motion.div whileHover={{ scale: 1 }} className="basis-2/3">
            lorem300
          </motion.div>
          <div className="basis-1/3"></div>
        </div>
      </section>
    </>
  );
};

export default FeaturedVideo;
