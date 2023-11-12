import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <>
      <div className="bg-secondary text-white lg:px-24 p-4 lg:py-8 flex justify-center items-center flex-col">
        <div className="py-4 text-center">
          <p>
            ©2023 THE OFFICE OF THE SENATE OF THE FEDERAL REPUBLIC OF NIGERIA.
            All rights reserved.
          </p>
          <p className="text-xs lg:text-base">
            By using this site you agree to the Terms of Service. Site by Dammy
            Digital Concepts
          </p>
        </div>

        <div className="text-white flex items-center justify-center space-x-4 py-2 font-bold text-sm lg:text-lg w-full text-center capitalize">
          <p>follow us:</p>{" "}
          <Link className="bg-white rounded p-1 text-primary" href="/">
            <Facebook size={12} />
          </Link>
          <Link className="bg-white rounded p-1 text-primary" href="/">
            <Twitter size={12} />
          </Link>
          <Link className="bg-white rounded p-1 text-primary" href="/">
            <Instagram size={12} />
          </Link>
          <Link className="bg-white rounded p-1 text-primary" href="/">
            <Linkedin size={12} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
