import React from "react";
import Image from "next/image";
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <Image src="/image/omoluabi.jpg" width={1480} height={200} alt="logo" />

        <div className="lg:absolute bottom-8 lg:px-24 p-4 text-white font-bold text-sm lg:text-lg w-full text-center uppercase bg-primary">
          Senator Abdul-Fatai and his leader Senator Ademola Ajumobi Abiola.
        </div>
      </motion.div>
    </>
  );
};

export default Hero;
