"use client";
import "./style.css";
import Hero from "./Components/Home/Hero";
import AboutUs from "./Components/Home/AboutUs";
import Gallery from "./Components/Home/Gallery";
import LeadSection from "./Components/Home/LeadSection";
import HighLight from "./Components/Home/HighLight";
import ContactDetails from "./Components/Home/ContactDetails";
import Footer from "./Components/Home/Footer";
import Info from "./Components/Home/Info";
import { useEffect, useState } from "react";
import Team from "./Components/Home/Team";

export default function Home() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);
  return (
    <main>
      {loader ? (
        <>
          <div className={` model-popup`}>
            <div className=" block">
              {/* <img src="./assets/Home/logo2.png" alt="M"/> */}
            </div>
            <span className="loader"></span>
          </div>
        </>
      ) : (
        <>
          <Hero />
          <AboutUs />
          <Info />
          <Team />
          {/* <Gallery/> */}
          {/* <LeadSection/> */}
          <HighLight />
          <ContactDetails />
          <Footer />
        </>
      )}
    </main>
  );
}
