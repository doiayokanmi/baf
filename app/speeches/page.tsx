'use client'

import React, { useEffect, useState } from "react";
import LayoutPage from "../component/Layout/LayoutPage";
import PageHead from "../component/PageHead";
import MainSpeechesCard from "../component/Cards/MainSpeechesCard";
import SpeechesLayout from "../component/Layout/SpeechesLayout";
import { getSpeeches } from "@/sanity-util";

interface props {
  _id: string;
  title: string;
  date: string;
  slug: string;
}

const Page = () => {
  const [data, setData] = useState<props[]>([]);
  const [allData, setAllData] = useState<props[]>([]);
  const [times, setTimes] = useState<number>(9);

  useEffect(() => {
    const getData = async () => {
      const allSpeeches = await getSpeeches();
      setAllData(allSpeeches);
      setData(allSpeeches.slice(0, times));
    };
    getData()
  }, [times]);

  return (
    <>
      <LayoutPage>
        <PageHead
          title="Speeches by Sen. AbdulFatai Buhari Omotayo"
          bgImage="/image/speeches.png"
        />

        <SpeechesLayout>
          <div className="flex flex-wrap flex-col lg:flex-row">
            {data.map((speech, index) => (
              <MainSpeechesCard
                key={speech._id}
                title={speech.title}
                slug={speech.slug}
                date={speech.date}
              />
            ))}
          </div>
        </SpeechesLayout>
      </LayoutPage>
    </>
  );
};

export default Page;
