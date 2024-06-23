import React from "react";
import Navbar from "../component/users/navbar";
import Hero from "../component/users/hero";
import SearchFeature from "../component/users/searchFeature";
import Footer from "../component/users/footer";
import "../styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

function SearchCarPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchFeature />
      <Footer />
    </>
  );
}

export default SearchCarPage;
