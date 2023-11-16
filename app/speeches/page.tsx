import React from "react";
import LayoutPage from "../component/Layout/LayoutPage";
import PageHead from "../component/PageHead";
import MainSpeechesCard from "../component/Cards/MainSpeechesCard";
import Image from "next/image";
import SpeechesLayout from "../component/Layout/SpeechesLayout";

const page = () => {
  return (
    <>
      <LayoutPage>
        <PageHead
          title="Speeches by Sen. AbdulFatai Buhari Omotayo"
          bgImage="/image/speeches.png"
        />

        <SpeechesLayout>
          <div className="flex flex-wrap flex-col lg:flex-row">
            <MainSpeechesCard />
            <MainSpeechesCard />
            <MainSpeechesCard />
            <MainSpeechesCard />
            <MainSpeechesCard />
          </div>
        </SpeechesLayout>
      </LayoutPage>
    </>
  );
};

export default page;
