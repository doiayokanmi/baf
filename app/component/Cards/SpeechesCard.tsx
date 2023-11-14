import React from "react";
import { motion } from "framer-motion";
import Link from 'next/link'

const SpeechesCard = () => {
  return (
    <>
      
      <div className="basis-1/3 p-2 px-0 lg:px-2 last:pe-0 first:ps-0">
        <Link href={''}>
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.02 }}
          className="p-4 border rounded shadow"
        >
            <p className="text-red-700 capitalize font-bold">
            speeches
          </p>
          <h1 className="text-xl py-6 font-extrabold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            earum?
          </h1>
          
          <p className="font-bold text-gray-500">12 October, 2023</p>
        </motion.div>
        </Link>
      </div>
  
    </>
  );
};

export default SpeechesCard;
