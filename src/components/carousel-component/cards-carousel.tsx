import React from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import TopicCard from "../card-component/topics-card";
import styles from "./carousel.module.css";
import Image from "next/image";

type CardsCarouselTypes = {
  slides: number[];
  options?: EmblaOptionsType;
};

const CardsCarousel: React.FC<CardsCarouselTypes> = (props) => {
  const { slides, options } = props;
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides.map((index) => (
            <div
              className={`${styles.embla__slide} flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_25%]`}
              key={index}
            >
              <Image
                src={
                  "https://genz-nextjs-v2.vercel.app/assets/imgs/page/homepage1/lifestyle.png"
                }
                alt='Topic Card'
                className={styles.embla__slide__img}
                width={0}
                height={0}
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardsCarousel;
