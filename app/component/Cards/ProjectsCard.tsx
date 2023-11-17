"use client";

import React, { useState } from "react";
import Modal from "../Headless/Modal";
import Image from "next/image";

interface Block {
  _type: string;
  children: { text: string }[];
}

interface Props {
  title: string;
  slug: string;
  date: string;
  description: Block[];
  image: Array<{
    url: string;
    metadata: {
      caption: string;
    };
  }>;
}

const ProjectsCard: React.FC<Props> = ({ title, slug, date, image, description }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div onClick={openModal} className="basis-1/3 cursor-pointer relative lg:p-2 py-2  lg:first:ps-0 lg:pe-0">
        <div className="h-[250px] overflow-hidden">
          <Image
            src={image[0].url}
            width={500}
            height={250}
            alt={image[0].metadata.caption} 
          />
          <div className="absolute p-2 bottom-0 text-center text-white bg-secondary">
            {title}
          </div>
        </div>
      </div>
    <Modal isOpen={isOpen} closeModal={closeModal} image={image} date={date} description={description} title={title} />
    </>
  );
};

export default ProjectsCard;