import BlogsListComponent from "@/components/blogs-list-component";
import CarouselComponent from "@/components/carousel-component";
import Header from "@/components/header-component";
import React from "react";

const Home = () => {
  return (
    <React.Fragment>
      <Header>
        <div>
          <CarouselComponent />
          <BlogsListComponent />
        </div>
      </Header>
    </React.Fragment>
  );
};

export default Home;
