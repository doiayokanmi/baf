import React from "react";
import { motion } from "framer-motion";

const SpeechesCard = () => {
  return (
    <>
      <div className="basis-1/3 p-2 px-0 lg:px-2 last:pe-0 first:ps-0">
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.02 }}
          className="p-4 border rounded shadow"
        >
          <h1 className="text-xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            earum?
          </h1>
          <p className="py-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
            aperiam enim dolore odio soluta blanditiis consequuntur? Corrupti
            temporibus sunt deserunt!
          </p>
          <p>12 October, 2023</p>
        </motion.div>
      </div>
    </>
  );
};

export default SpeechesCard;
