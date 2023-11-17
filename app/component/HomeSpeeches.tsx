'use client'

import { useInView, motion } from "framer-motion";
import React, { useEffect, useState, useRef } from "react";
import SpeechesCard from "./Cards/SpeechesCard";
import { getSpeeches } from "@/sanity-util";

interface props {
  title: string;
  date: string;
  slug: string;
}

const HomeSpeeches = () => {
  const container = useRef(null);
  const isInView = useInView(container);

  const [data, setData] = useState<props[]>([]);
  const times = 3;

  useEffect(() => {
    const getData = async () => {
      const allSpeeches = await getSpeeches();
      setData(allSpeeches.slice(0, times));
    };
    getData()
  }, [times]);
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
        {
          data.map((item, index)=>(
            <SpeechesCard title={item.title} slug={item.slug} date={item.date} key={index} />
          ))
        }
        
      </div>
    
    </motion.section>
  );
};

export default HomeSpeeches;
