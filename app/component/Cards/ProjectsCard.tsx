"use client";

import React, { useState } from "react";
import Modal from "../Headless/Modal";
import Image from "next/image";

const ProjectsCard = () => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      
        <div onClick={openModal} className="basis-1/3 cursor-pointer relative lg:p-2 py-2  lg:first:ps-0 lg:pe-0">
          <div className="h-[250px] overflow-hidden">
            <Image
              src={"/image/bafabat.jpg"}
              width={500}
              height={250}
              alt=""
            />
            <div className="absolute p-2 bottom-0 text-center text-white bg-secondary">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem,
              ab.
            </div>
          </div>
        </div>
      <Modal isOpen={isOpen} closeModal={closeModal} title="The road from NYSC camp to Iseyin grammar school, oke odo" />
    </>
  );
};

export default ProjectsCard;
