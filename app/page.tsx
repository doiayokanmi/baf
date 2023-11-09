"use client";

import FeaturedVideo from "./component/FeaturedVideo";
import Hero from "./component/Hero";
import LayoutPage from "./component/LayoutPage";

export default function Home() {
  return (
    <>
      <LayoutPage>
        <Hero />
        <FeaturedVideo />
      </LayoutPage>
    </>
  );
}
