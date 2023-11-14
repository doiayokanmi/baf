import React from "react";
import LayoutPage from "../component/LayoutPage";
import PageHead from "../component/PageHead";
import MainSpeechesCard from "../component/Cards/MainSpeechesCard";


const page = () => {
  return (
    <>
      <LayoutPage>
        <PageHead
          title="Speeches by Sen. AbdulFatai Buhari Omotayo"
          bgImage="/image/speeches.png"
        />

        <section className="lg:px-24 p-4 lg:py-6 mt-8 flex flex-col lg:flex-row">
          <div className="basis-2/3 flex flex-wrap flex-col lg:flex-row">
            <MainSpeechesCard />
            <MainSpeechesCard />
            <MainSpeechesCard />
            <MainSpeechesCard />
            <MainSpeechesCard />

          </div>
          <div className="basis-1/3"></div>
        </section>
      </LayoutPage>
    </>
  );
};

export default page;
