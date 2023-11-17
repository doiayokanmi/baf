'use client'

import React, { useEffect, useState } from 'react';
import SpeechesLayout from '../../component/Layout/SpeechesLayout';
import LayoutPage from '../../component/Layout/LayoutPage';
import PageHead from '../../component/PageHead';
import { loadSpeeches } from '@/sanity-util';

interface Speech {
  _id: string;
  title: string;
  date: string;
  speeches: string;
  image: string;
  slug: string;
}

interface DetailsProps {
  params: { slug: string };
}

const Details: React.FC<DetailsProps> = ({ params }) => {
  const slug = params.slug;
  const [data, setData] = useState<Speech | null>(null);

  useEffect(() => {
    const getData = async () => {
      const speechesData = await loadSpeeches(slug);
      setData(speechesData[0]);
    };

    getData();
  }, [slug]);

  return (
    <>
      <LayoutPage>
        <PageHead
          title="Speeches by Sen. AbdulFatai Buhari Omotayo"
          bgImage="/image/speeches.png"
        />

        <SpeechesLayout>
          {data && (
            <div className="">
              <h1 className="font-bold">{data.title}</h1>
            </div>
          )}
        </SpeechesLayout>
      </LayoutPage>
    </>
  );
};

export default Details;
