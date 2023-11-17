import React from "react";
import Link from "next/link";

interface props {
  title: string;
  date: string;
  slug: string;
}

const MainSpeechesCard = ({title, date, slug}:props) => {
  return (
    <>
      <Link href={`/speeches/${slug}`} className="basis-1/2 lg:odd:pe-2 lg:even:ps-2">
        <div className="hover:text-primary py-4 border-b">
          <p className="font-bold text-xl">
            {title} 
          </p>

          <p className="text-red-700 mt-4">{date}</p>
        </div>
      </Link>
    </>
  );
};

export default MainSpeechesCard;
