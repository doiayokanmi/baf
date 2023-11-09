"use client";

import AnimatedWrapper from "./AnimatedWrapper";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function LayoutPage({ children }: {children: React.ReactNode}) {
  return (
    <>
      <AnimatedWrapper>
        <Navbar />
        <main className="relative overflow-x-hidden">
          {children}
          <Footer />
        </main>
      </AnimatedWrapper>
    </>
  );
}
