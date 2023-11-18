import React from "react";
import LayoutPage from "../component/Layout/LayoutPage";
import SpeechesLayout from "../component/Layout/SpeechesLayout";
import PageHead from "../component/PageHead";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const page = () => {
  return (
    <>
      <LayoutPage>
        <PageHead title="Contact Page" bgImage="/image/contact.jpg" />
        <SpeechesLayout>
          <div className="flex lg:space-x-4 space-y-2 lg:space-y-0 justify-between">
            <div className="basis-1/2 flex-1 border rounded">
              <input
                type="text"
                placeholder="First Name"
                className="p-2 rounded border-0 w-full"
              />
            </div>
            <div className="basis-1/2 flex-1 border rounded">
              <input
                type="text"
                placeholder="Last Name"
                className="p-2 rounded border-0 w-full"
              />
            </div>
          </div>

          <div className="border rounded my-2">
            <input
              type="text"
              placeholder="Subject"
              className="p-2 rounded border-0 w-full"
            />
          </div>
          <div className="border rounded my-2">
            <textarea
              className="p-2 rounded border-0 w-full"
              id="w3review"
              name="w3review"
              rows={4}
              cols={50}
            >
              Enter your message here...
            </textarea>
          </div>

          <div>
            <button className="w-full p-2 rounded bg-primary text-white">
                Send Message
            </button>
          </div>

          <div className="my-4 flex items-center space-x-2">
            <p className=" text-gray-500">You can also reach us on: </p>
            <Link href={'/'}>
                <Twitter size={16} />
            </Link>
            <Link href={'/'}>
                <Facebook size={16} />
            </Link>
            <Link href={'/'}>
                <Linkedin size={16} />
            </Link>
            <Link href={'/'}>
                <Instagram size={16} />
            </Link>
          </div>
        </SpeechesLayout>
      </LayoutPage>
    </>
  );
};

export default page;
