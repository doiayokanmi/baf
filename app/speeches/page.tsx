import React from "react";
import LayoutPage from "../component/Layout/LayoutPage";
import PageHead from "../component/PageHead";
import MainSpeechesCard from "../component/Cards/MainSpeechesCard";
import Image from "next/image";


const page = () => {
  return (
    <>
      <LayoutPage>
        <PageHead
          title="Speeches by Sen. AbdulFatai Buhari Omotayo"
          bgImage="/image/speeches.png"
        />

        <section className="lg:px-24 relative justify-between p-4 lg:py-6 mt-8 flex flex-col lg:flex-row">
          <div className="basis-3/4 flex flex-wrap lg:pe-8 flex-col lg:flex-row">
            <MainSpeechesCard />
            <MainSpeechesCard />
            <MainSpeechesCard />
            <MainSpeechesCard />
            <MainSpeechesCard />

          </div>
          <div className="basis-1/4">
            <Image src={'/image/omoluabi.png'} width={300} height={300} alt="" />

            <h3 className="font-bold py-4 text-xl uppercase">The man for the job - Omoluabi!!!</h3>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque qui suscipit unde veniam assumenda quae quam totam provident quos culpa doloremque obcaecati quod ipsam, labore ea, modi a ut iste.
            </p>
          </div>
        </section>
      </LayoutPage>
    </>
  );
};

export default page;
