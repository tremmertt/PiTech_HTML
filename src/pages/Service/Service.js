import React from "react";
import BannerService from "../../components/Banner/BannerService";
import CarouselService from "../../components/CarouselService/CarouselService";
import ClientsService from "../../components/Clients/ClientsService";
import IntroService from "../../components/Introduction/IntroService";

export default function Home() {
  return (
    <div className="container-fluid ">
      <CarouselService />
      <IntroService />
      <BannerService />
      <ClientsService />
    </div>
  );
}
