import React from 'react'
import SpeechesLayout from '../../component/Layout/SpeechesLayout'
import LayoutPage from '../../component/Layout/LayoutPage'
import PageHead from '../../component/PageHead'

const Details = ({ params }) => {
  return (
    <>
      <LayoutPage>
        <PageHead
          title="Speeches by Sen. AbdulFatai Buhari Omotayo"
          bgImage="/image/speeches.png"
        />

        <SpeechesLayout>
          <div className="">{params.slug}</div>
        </SpeechesLayout>
      </LayoutPage>
    </>
  );
};

export default Details