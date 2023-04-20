import { IconButton } from "@mui/material";
import React, { useRef } from "react";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CardsCarousel from "./cards-carousel";
import styles from "./carousel.module.css";
import { EmblaOptionsType } from "embla-carousel-react";

// Embla Carousel Options
const OPTIONS: EmblaOptionsType = {
  slidesToScroll: "auto",
  containScroll: "trimSnaps",
};
// Dummy Slides Count
const SLIDE_COUNT = 8;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const CarouselComponent: React.FC = () => {
  return (
    <div className='flex flex-col self-center justify-start lg:flex-row p-6 rounded-md border border-borderColor overflow-hidden bg-cardBackground'>
      <div className='flex flex-col lg:w-[30%]'>
        <span className='text-xl font-bold mb-4'>Hot Topics</span>
        <span className='text-sm mb-5'>
          {
            "Don't miss out on the latest news about Travel tips, Hotels review, Food guide..."
          }
        </span>
        <div className='flex justify-start items-center mb-5'>
          <IconButton className='bg-borderColor w-[2rem] h-[2rem] mr-1'>
            <ArrowBackRoundedIcon className='text-textPrimary' />
          </IconButton>
          <IconButton className='bg-borderColor w-[2rem] h-[2rem] ml-1'>
            <ArrowForwardRoundedIcon className='text-textPrimary' />
          </IconButton>
        </div>
      </div>
      <section className={styles.web__carousel}>
        <CardsCarousel slides={SLIDES} options={OPTIONS} />
      </section>
    </div>
  );
};

export default CarouselComponent;
