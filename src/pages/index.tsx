import BlogsListComponent from "@/components/trending-list-component";
import CarouselComponent from "@/components/carousel-component";
import Header from "@/components/header-component";
import React from "react";
import { trendingData } from "@/json/trendingData";
import RecentPostComponent from "@/components/recent-post-component";
import { recentPosts } from "@/json/recentPosts";
import Footer from "@/components/footer-component";

const Home = () => {
  return (
    <React.Fragment>
      <Header>
        <div>
          <CarouselComponent />
          <BlogsListComponent data={trendingData} />
          <RecentPostComponent data={recentPosts} />
          <Footer />
        </div>
      </Header>
    </React.Fragment>
  );
};

export default Home;
