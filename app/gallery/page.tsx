'use client'

import React, { useState } from "react";
import LayoutPage from "../component/LayoutPage";
import PhotoCard from "../component/PhotoCard";
import { yearsArray } from "@/util";


const Page = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <LayoutPage>
        <section className="h-[300px] bg-[url('/image/bafabat.jpg')] bg-cover bg-top heading flex justify-center items-center text-center font-extrabold text-4xl text-primary">
          Gallery - Photo of Events and Media
        </section>

        <section className="lg:px-24 p-4 lg:py-6">
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
            <PhotoCard />
            <PhotoCard />
            <PhotoCard />
            <PhotoCard />
            <PhotoCard />
            <PhotoCard />
            <PhotoCard />
            <PhotoCard />
            <PhotoCard />
            <PhotoCard />
            <PhotoCard />
            <PhotoCard />
            <PhotoCard />
            <PhotoCard />
            <PhotoCard />
            <PhotoCard />
          </div>
        </section>
      </LayoutPage>
    </>
  );
};

export default Page;
