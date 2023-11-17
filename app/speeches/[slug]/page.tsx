'use client'

import React, { useEffect, useState } from 'react';
import SpeechesLayout from '../../component/Layout/SpeechesLayout';
import LayoutPage from '../../component/Layout/LayoutPage';
import PageHead from '../../component/PageHead';
import { loadSpeeches } from '@/sanity-util';
import Image from 'next/image';

interface Block {
  _type: string;
  children: { text: string }[];
}
interface Speech {
  _id: string;
  title: string;
  date: string;
  speech: Block[];
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
        
        <SpeechesLayout>
          {data && (
            <div className="flex flex-col space-y-4">
              <h1 className="font-bold text-4xl">{data.title}</h1>
              <Image src={data.image} width={1200} height={300} alt='' />
              <div>
              {data.speech.map((block, index) => {
                  switch (block._type) {
                    case 'block':
                      return (
                        <p key={index} className='py-2 font-semibold'>
                          {block.children.map((child) => child.text).join(' ')}
                        </p>
                      );
                   
                    default:
                      return null;
                  }
                })}
              </div>
            </div>
          )}
        </SpeechesLayout>
      </LayoutPage>
    </>
  );
};

export default Details;
