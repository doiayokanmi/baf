import React from "react";

const PageHead = ({ title, bgImage }: { title: string; bgImage: string; }) => {
  const style = {
    backgroundImage: `url(${bgImage})`,
  };
  return (
    <>
      <section
        style={style}
        className={`h-[300px] bg-cover bg-top heading flex justify-center items-end text-center font-extrabold lg:text-2xl text-primary capitalize lg:px:24 px-4`}
      >
        <p className="p-4 bg-white shadow rounded -mb-8">{title}</p>
      </section>
    </>
  );
};

export default PageHead;
