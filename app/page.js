"use client"
import "./style.css"
import Hero from "./Components/Home/Hero";
import AboutUs from "./Components/Home/AboutUs";
import Gallery from "./Components/Home/Gallery";
import LeadSection from "./Components/Home/LeadSection";
import HighLight from "./Components/Home/HighLight";
import ContactDetails from "./Components/Home/ContactDetails";
import Footer from "./Components/Home/Footer";

export default function Home() {
  return (
  <main>
    <Hero/>
    <AboutUs/>
    <Gallery/>
    <LeadSection/>
    <HighLight/>
    <ContactDetails/>
    <Footer/>
  </main>
  );
}
