import React from "react";
import Navbar from "../component/users/navbar";
import Hero from "../component/users/hero";
import OurService from "../component/users/ourService";
import WhyUs from "../component/users/whyUs";
import Testimoni from "../component/users/testimoni";
import CTA from "../component/users/cta";
import Footer from "../component/users/footer";
import "../styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <OurService />
      <WhyUs />
      <Testimoni />
      <CTA />
      <Footer />
    </>
  );
}

export default HomePage;
