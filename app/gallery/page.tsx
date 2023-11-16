'use client'

import React, { useEffect, useState } from "react";
import LayoutPage from "../component/Layout/LayoutPage";
import PhotoCard from "../component/Cards/PhotoCard";
import { yearsArray } from "@/util";
import PageHead from "../component/PageHead";
import { getGallery } from "@/sanity-util";
import { motion } from 'framer-motion'

interface dataProps {
  _id: string;
  description: string;
  image: string;
}

const Page = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState<dataProps[]>([]);
  const [times, setTimes] = useState<number>(15);

  useEffect(() => {
    const getData = async () => {
      const allGallery = await getGallery();
      setData(allGallery.slice(0, times));
    };

    getData();
  }, [times]);

  return (
    <>
      <LayoutPage>
        <PageHead
          bgImage="/image/bafabat.jpg"
          title="Gallery - Photo of Events and Media"
        />

        <section className="lg:px-24 p-4 lg:py-6 mt-8">
          <div className="flex justify-between border rounded p-4 items-center">
            <h1 className="font-extrabold">All Photos</h1>
            <div className="flex space-x-2 items-center">
              <p>Select year:</p>
              <select
                className="rounded"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              >
                {yearsArray.map((year, index) => (
                  <option key={index} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row flex-wrap">
            {data.map((photo, index) => (
              <PhotoCard
                key={photo._id}
                description={photo.description}
                image={photo.image}
              />
            ))}
          </div>

          <div className={`flex justify-center my-4 ${data.length <= times && 'hidden'}`}>
            <motion.button
              onClick={() => setTimes(times + 9)}
              whileTap={{ scale: 0.9 }}
              className="w-full lg:w-auto p-4 bg-primary text-white"
            >
              Load more image
            </motion.button>
          </div>
        </section>
      </LayoutPage>
    </>
  );
};

export default Page;
