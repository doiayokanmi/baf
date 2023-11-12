import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Quotes = () => {
  return (
    <>
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.02 }}
        className="flex justify-end lg:px-24 lg:py-8 p-4"
      >
        <div className="bg-primary rounded w-full text-white p-4">
          click for more speeches
        </div>
      </motion.div>
      <section className="lg:px-24 lg:py-8 p-4 flex flex-col lg:flex-row justify-between">
        <div className="basis-1/3">
        <Image src={`/image/omoluabi.png`} alt="" width={400} height={400}/>
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
