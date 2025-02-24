"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import styles from "./related.module.scss";
import "./related.scss";
import { ProductInterface } from "@/data/models/product";
import ProductCard from "@/components/products/card";
import { useProduct } from "@/data/providers/product";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Mousewheel,
} from "swiper/modules";

export default function RelatedProducts() {
  const { data, isLoading } = useProduct();

  if (isLoading) {
    return <></>;
  }

  return (
    <div className={styles.related_products}>
      <h2 className={styles.related_products__title}>Similar Items</h2>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Mousewheel]}
        scrollbar={{ draggable: true }}
        mousewheel={{ enabled: true, forceToAxis: true }}
        direction="horizontal"
        slidesPerView="auto"
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data?.related?.map((product: ProductInterface) => (
          <SwiperSlide key={product.id}>
            <ProductCard
              id={product.id}
              name={product.name}
              brand={product.brand}
              price={product.price}
              image={product.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
