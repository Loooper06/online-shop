import React, { useEffect } from "react";
import Aos from "aos";
import SubBanner from "./../../components/subBanner/SubBanner";
import HeaderBanner from "./../../components/headerBanner/HeaderBanner";
import TrendingCarousel from "../../components/productsCarousel(trendings)/TrendingCarousel";
import MainAd_1 from "../../components/mainAds_1/MainAd_1";
import OnSaleCarousel from "./../../components/productsCarousel(onSale)/OnSaleCarousel";
import MainAd_2 from "../../components/mainAds_2/MainAd_2";
import BlogsCarousel from "../../components/blogsCarousel/BlogsCarousel";
import BrandsCarousel from "../../components/brandsCarousel/BrandsCarousel";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <HeaderBanner />
      <SubBanner />
      <TrendingCarousel title="TRENDING" />
      <MainAd_1 />
      <OnSaleCarousel title="ONSALE" />
      <MainAd_2 />
      <BlogsCarousel title="FROM BLOGS" />
      <BrandsCarousel />
    </div>
  );
};

export default Home;
