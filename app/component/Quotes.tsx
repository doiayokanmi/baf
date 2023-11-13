import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Marquee, { Motion } from "react-marquee-slider";
import times from "lodash/times";

const Quotes = () => {
  return (
    <>
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.02 }}
        className="flex justify-end lg:px-24"
      >
        <div className="bg-primary uppercase relative rounded w-full text-white p-4">
        <p className="absolute h-full p-4 bg-red-700 z-20 font-extrabold top-0 left-0">Latest News:</p>
        <div className="overflow-hidden">
      <p className="whitespace-nowrap animate-marquee">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi ea, necessitatibus a quos eius itaque eum non, consequatur, repudiandae doloremque est dolores tenetur aperiam illo error consequuntur! Aut, nam consequatur!
      </p>
    </div>
        </div>
      </motion.div>
      <section className="lg:px-24 p-4 flex flex-col lg:flex-row justify-between">
        <div className="basis-1/3">
          <Image src={`/image/omoluabi.png`} alt="" width={400} height={400} />
        </div>

        <div className="basis-2/3 relative p-8 py-8 bg-secondary text-center italic text-white text-lg lg:text-4xl">
          <span className="text-red-700">Quote:</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            illo nesciunt error, dolores quas excepturi, tenetur nihil
            voluptatem, cum quam exercitationem a libero consectetur at! Porro
            tempora reiciendis dolores impedit?
          </p>
        </div>
      </section>
    </>
  );
};

export default Quotes;
