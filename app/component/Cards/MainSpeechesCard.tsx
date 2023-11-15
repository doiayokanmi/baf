import React from "react";
import Link from "next/link";

const MainSpeechesCard = () => {
  return (
    <>
      <Link href="/" className="basis-1/2 lg:odd:pe-2 lg:even:ps-2">
        <div className="hover:text-primary py-4 border-b">
          <p className="font-bold text-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora,
            a?
          </p>

          <p className="text-red-700 mt-4">12 October, 2023</p>
        </div>
      </Link>
    </>
  );
};

export default MainSpeechesCard;
