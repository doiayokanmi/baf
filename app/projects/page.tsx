'use client'

import React, { useState } from "react";
import LayoutPage from "../component/LayoutPage";
import PageHead from "../component/PageHead";
import { yearsArray } from "@/util";
import ProjectsCard from "../component/Cards/ProjectsCard";

const Page = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <LayoutPage>
        <PageHead
          bgImage="/image/projects.jpg"
          title="Projects facilitated and commissioned by Sen. AbdulFatai Buhari Omotayo"
        />

        <section className="lg:px-24 p-4 lg:py-6 mt-8">
          <div className="flex justify-between border rounded p-4 items-center">
            <h1 className="font-extrabold">All Project</h1>
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

            <ProjectsCard />
            <ProjectsCard />
            <ProjectsCard />
            <ProjectsCard />
            <ProjectsCard />
            <ProjectsCard />
            <ProjectsCard />
            <ProjectsCard />
            <ProjectsCard />

          </div>
        </section>
      </LayoutPage>
    </>
  );
};

export default Page;
