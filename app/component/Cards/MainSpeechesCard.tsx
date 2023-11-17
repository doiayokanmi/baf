'use client'

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { convertDate } from "@/util";

interface props {
  title: string;
  date: string;
  slug: string;
}

const MainSpeechesCard = ({title, date, slug}:props) => {
  const [newDate, setNewDate] = useState('')
  useEffect(() => {
    setNewDate(convertDate(date));
  }, [date]);
  return (
    <>
      <Link href={`/speeches/${slug}`} className="basis-1/2 lg:odd:pe-2 lg:even:ps-2">
        <div className="hover:text-primary py-4 border-b">
          <p className="font-bold text-xl">
            {title} 
          </p>

          <p className="text-red-700 mt-4">{newDate}</p>
        </div>
      </Link>
    </>
  );
};

export default MainSpeechesCard;
