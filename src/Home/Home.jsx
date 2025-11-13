import React from "react";
import Banner from "../Components/Banner";
import AboutSection from "../Components/AboutSection";
import Info from "../Components/Info";
import Carousel from "../Components/Carousel";
import Form from "../Components/Form";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div>
      <Banner />
      <AboutSection />
      <Info />
      <Carousel />
      <Form />
      <Footer />
    </div>
  );
};

export default Home;
