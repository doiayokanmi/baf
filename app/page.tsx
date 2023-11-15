"use client";

import FeaturedVideo from "./component/FeaturedVideo";
import Hero from "./component/Hero";
import HomeSpeeches from "./component/HomeSpeeches";
import LayoutPage from "./component/Layout/LayoutPage";
import Quotes from "./component/Quotes";

export default function Home() {
  return (
    <>
      <LayoutPage>
        <Hero />
        <FeaturedVideo />
        <HomeSpeeches />
        <Quotes />
      </LayoutPage>
    </>
  );
}
