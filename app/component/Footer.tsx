import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="bg-secondary text-white lg:px-24 p-4 lg:py-8 flex justify-center items-center flex-col">
        <div className="py-4 text-center">
          <p>
            ©2023 THE OFFICE OF THE SENATE OF THE FEDERAL REPUBLIC OF NIGERIA.
            All rights reserved.
          </p>
          <p>
            By using this site you agree to the Terms of Service. Site by Dammy
            Digital Concepts
          </p>
        </div>

        <div className="text-white font-bold text-sm lg:text-lg w-full text-center uppercase bg-primary"></div>
      </div>
    </>
  );
};

export default Footer;
