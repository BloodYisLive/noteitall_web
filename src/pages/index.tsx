import CarouselComponent from "@/components/carousel-component";
import Header from "@/components/header-component";
import React from "react";

const Home = () => {
  return (
    <React.Fragment>
      <Header>
        <CarouselComponent />
      </Header>
    </React.Fragment>
  );
};

export default Home;
