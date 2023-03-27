import BlogsListComponent from "@/components/trending-list-component";
import CarouselComponent from "@/components/carousel-component";
import Header from "@/components/header-component";
import React from "react";
import { trendingData } from "@/json/trendingData";
import RecentPostComponent from "@/components/recent-post-component";

const Home = () => {
  return (
    <React.Fragment>
      <Header>
        <div>
          <CarouselComponent />
          <BlogsListComponent data={trendingData} />
          <RecentPostComponent />
        </div>
      </Header>
    </React.Fragment>
  );
};

export default Home;
