import React from "react";
import Header from "../Containers/Header/Header";
import Container from "../Containers/Container";
import Footer from "../Containers/Footer/Footer";
import { Button } from "@material-ui/core";
import Link from "next/link";
import ProductCardWrapper from "../Wrappers/productCardWrapper";
//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Pagination, Navigation } from "swiper";
SwiperCore.use([Pagination, Navigation]);
import SwiperData from "../Data/SwiperData";

const ProductCard = () => {
  return (
    <ProductCardWrapper>
      <Container>
        <Header />
        <p className="mt-5 fw-bold mb-0">Электроника *  смартфоны</p>
        <div className="d-flex align-items-center mb-4">
          <h1 className="">Samsung a52 4/256 dual sim onyx black</h1>
          <p className="badge rounded-0 text-dark m-0 ms-3 p-2">
            Выбор покупателей
          </p>
        </div>
        <div className="firstContainer">
          <div className="row">
            <div className="col-sm-4 col-md-1">
              <div className="smallimg d-flex justify-content-center">
                <img src="p1small1.png" alt="" />
                <img src="p1small2.png" alt="" />
                <img src="p1small3.png" alt="" />
              </div>
            </div>
            <div className="col-sm-8 col-md-3">
              <img className="bigimg w" src="p1samsung.png" alt="" />
            </div>
            <div className="col-sm-6 col-md-4 ps-5 py-5 pe-0">
              <p className="">Цвет товара: Черный</p>
              <div className="row">
                <div className="colorBoxes">
                  <div className="p-2">
                    <div className="col-3 d-flex align-items-center justify-content-center colorBox black"></div>
                  </div>
                  <div className="p-2">
                    <div className="col-3 colorBox white"></div>
                  </div>
                  <div className="p-2">
                    <div className="col-3 colorBox green"></div>
                  </div>
                  <div className="p-2">
                    <div className="col-3 colorBox gray"></div>
                  </div>
                </div>
              </div>
              <p className="">Память:</p>
              <div className="row">
                <div className="memorie">
                  <div className="p-2">
                    <div className="col-4 whiteBox">64</div>
                  </div>
                  <div className="p-2">
                    <div className="col-4 whiteBox">128</div>
                  </div>
                  <div className="p-2">
                    <div className="col-4 whiteBox">256</div>
                  </div>
                </div>
              </div>
              <div className="prices mt-4">
                <div className="d-flex">
                  <h4 className="oldPrice">16 800 000</h4>
                  <p
                    className="badge d-flex 
                align-items-center rounded-0 text-dark 
                m-0 ms-3 fs-"
                  >
                    1 330 000 сум
                  </p>
                </div>
                <h3 className="fw-bold">15,470,999</h3>
                <p className="rentPrice">от 1 362 000 сум/мес</p>
              </div>
              <Button>Оформить заказ</Button>
              <Link href="/">
                <a className="link-korzinka">Перейти в корзину</a>
              </Link>
            </div>
            <div className="col-sm-6 col-md-4 py-5 ps-1 pe-4">
              <div className="characteristic mb-3">
                <ul>
                  <li className="">экран: 6.53" (2340×1080) 60 Гц</li>
                  <li>оперативная память: 4 ГБ</li>
                  <li>память: 64 ГБ, слот для карты памяти</li>
                  <li>3 камеры: 48 МП, 2 МП, 2 МП</li>
                  <li>аккумулятор: 6000 мА·ч</li>
                  <li>процессор: Qualcomm Snapdragon 662</li>
                  <li>SIM-карты: 2 (nano SIM)</li>
                </ul>
              </div>
              <Link href="/">
                <a className="link-korzinka text-primary">Все характеристики</a>
              </Link>
            </div>
          </div>
        </div>
        <h1 className="py-5">С этим товаром покупают</h1>
        <Swiper
          slidesPerView={5}
          spaceBetween={0}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{ clickable: true }}
          navigation={true}
          className="mySwiper"
        >
          {SwiperData.map((v, i) => {
            return (
              <SwiperSlide className="border border-primary h-100 p-3" key={i}>
                <div className=" text-start">
                  <img src={v.img} alt="" />
                  <p className="fw-bold">{v.name}</p>
                  <p className="price">{v.price}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Button className="newProducts">Перейти в раздел новинки</Button>

        <Footer />
      </Container>
    </ProductCardWrapper>
  );
};

export default ProductCard;
