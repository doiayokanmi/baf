import { useInView, motion } from "framer-motion";
import React, { useRef } from "react";
import SpeechesCard from "./SpeechesCard";
import Link from "next/link";

const HomeSpeeches = () => {
  const container = useRef(null);
  const isInView = useInView(container);
  return (
    <motion.section ref={container} className="lg:px-24 p-4 lg:py-8">
      <motion.h1
        initial={{ x: 1400 }}
        animate={{ x: 0 }}
        exit={{ x: 1400 }}
        transition={{ duration: 1 }}
        className="text-3xl text-gray-500 font-extrabold capitalize py-4"
      >
        speeches
      </motion.h1>

      <div className="flex justify-between flex-wrap flex-col lg:flex-row">
        <SpeechesCard />
        <SpeechesCard />
        <SpeechesCard />
      </div>
      <motion.div initial={{scale:1}} whileTap={{scale:0.95}} whileHover={{scale:1.02}} className="my-6 flex justify-end">
        <Link href="/speeches" className="bg-primary rounded w-full lg:w-auto text-white p-4">click for more speeches</Link>
      </motion.div>
    </motion.section>
  );
};

export default HomeSpeeches;
