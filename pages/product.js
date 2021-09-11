import {
  faFacebook,
  faInstagram,
  faTelegram,
  faTimes,
} from "@fortawesome/free-brands-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@material-ui/core";
import React, { useState } from "react";
import {
  bigCategores,
  bottomText,
  categores,
  phones,
  rightSide,
} from "../Data/data";
import CloseIcon from "@material-ui/icons/Close";
import ProductWrapper from "../Wrappers/productWrapper";
import Container from "./../Containers/Container";
import Header from "./../Containers/Header/Header";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { useSelector } from "react-redux";
import * as t from "../redux/Types";
import { dispatch } from "../redux/Store";
import Link from "next/link";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const phoneData = () => {
    const action = { type: t.PHONES_DATA, payload: phones };
    dispatch(action);
  };
  phoneData();
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const Product = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [show, setShow] = useState(true);
  const [show2, setShow2] = useState(true);
  const [openInput, setOpenInput] = useState(false);
  const checked = useSelector((state) => state.BooksReducer.chekbox);
  const toggle = (i) => {
    if (checked == -1) {
      const action = { type: t.CHEKED, payload: i };
      dispatch(action);
    } else if (checked > -1) {
      const action = { type: t.CHEKED, payload: i };
      dispatch(action);
    }
  };

  const hide = () => {
    setShow(!show);
  };

  const hide2 = () => {
    setShow2(!show2);
  };

  const showInput = () => {
    setOpenInput(!openInput);
  };

  const data = useSelector((state) => state.BooksReducer.filterdata);

  const saveProduct = (index) => {
    const saveProd = (data[index].save = !data[index].save);
    console.log(saveProd, index);
  };

  return (
    <Container>
      <Header />
      <ProductWrapper>
        <div className="d-flex D_flex">
          <div className="LeftSide">
            <div className="container mt-3">
              <div className={classes.root}>
                <AppBar className="mt-4" position="static">
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="simple tabs example"
                  >
                    <Tab label="Полная цена" {...a11yProps(0)} />
                    <Tab label="Цена в месяц" {...a11yProps(1)} />
                  </Tabs>
                </AppBar>
                <TabPanel className="px-2" value={value} index={0}>
                  <div className="">
                    <p className="mb-1 my-3 fw-bold">Цена</p>
                    <div className="d-flex align-items-center">
                      <div className="d-flex align-items-center mt-3">
                        <p className="mb-0 me-2 subtitle">От</p>
                        <input
                          type="text"
                          placeholder="3.000.000"
                          className="input"
                        />
                      </div>
                      <div className="d-flex align-items-center mt-3">
                        <p className="mb-0 mx-2 subtitle">До</p>
                        <input
                          type="text"
                          placeholder="3.000.000"
                          className="input"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="row w-100">
                      {bigCategores.map((value, index) => {
                        return (
                          <div
                            className="col-sm-6 col-lg-6 col-xl-12"
                            key={index}
                          >
                            <div className="d-flex mt-4">
                              <p className="mb-0 subtitle me-4 mb-3">
                                {value.title}
                              </p>
                              {show ? (
                                <FontAwesomeIcon
                                  onClick={hide}
                                  className={`mt-1 ms-5 icon`}
                                  icon={value.icon}
                                />
                              ) : (
                                <FontAwesomeIcon
                                  onClick={hide}
                                  className={`mt-1 ms-5 icon`}
                                  icon={faAngleDown}
                                />
                              )}
                            </div>
                            {value.category.map((value, index) => {
                              return (
                                <div
                                  className={`d-flex align-items-center ${
                                    show ? "" : "d-none"
                                  }`}
                                  key={index}
                                >
                                  <button
                                    onClick={() => toggle(index)}
                                    className={` box me-2 ${
                                      checked == index ? "active" : ""
                                    }`}
                                  ></button>
                                  <p className="my-1 subtitle">
                                    {value.subtitle}
                                  </p>
                                </div>
                              );
                            })}
                          </div>
                        );
                      })}

                      {categores.map((value, index) => {
                        return (
                          <div
                            className="col-sm-6 col-md-6 col-lg-6 col-xl-12"
                            key={index}
                          >
                            <div className="d-flex justify-content-between mt-4">
                              <p className="subtitle my-3">
                                {value.name.title}
                              </p>
                              {show2 ? (
                                <FontAwesomeIcon
                                  onClick={hide2}
                                  className={`mt-3 mx-3 icon`}
                                  icon={value.name.icon}
                                />
                              ) : (
                                <FontAwesomeIcon
                                  onClick={hide2}
                                  className={`mt-3 mx-3 icon`}
                                  icon={faAngleDown}
                                />
                              )}
                            </div>
                            {value.name.category.map((value, index) => {
                              return (
                                <div
                                  className={`d-flex justify-content-between ${
                                    show2 ? "" : "d-none"
                                  }`}
                                  key={index}
                                >
                                  <div className="d-flex align-items-center mt-2">
                                    <input
                                      type="checkbox"
                                      className="myinput"
                                    />
                                    <p className="mb-0 subtitle ms-2">
                                      {value.title}
                                    </p>
                                  </div>
                                  <div className="">
                                    <p className="my-1 subtitle me-3">
                                      {value.subtitle}
                                    </p>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Maiores labore possimus eveniet minima vitae ea reprehenderit,
                  nemo beatae vero, corporis laudantium quo quaerat ex
                  similique? Quisquam sint deserunt numquam id?
                </TabPanel>
              </div>
              {/* <div>
                <Button className="orange_btn active">Полная цена</Button>
                <Button className="orange_btn">Цена в месяц</Button>
              </div> */}
            </div>
          </div>
          <div className="Sidebar">
            <div className="container ">
              <div className="d-flex justify-content-between align-items-center">
                <h1 className="title my-4">Удивляйся и удивляй!</h1>
              </div>
              <div className="row justify-content-center">
                {data?.map((value, index) => {
                  return (
                    <div
                      className="col-10 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-3 px-1 mb-3 position-relative"
                      key={index}
                    >
                      <div className="cards_border ">
                        <img className="skidka" src="skidka.png" alt="photo" />
                        <div className="px-3">
                          <div className="d-flex justify-content-center align-items-center ps-4 my-3">
                            <Link href="/productCard">
                              <a>
                                <img
                                  className="me-3 phone_photo"
                                  src={value.img}
                                  alt="photo"
                                />
                              </a>
                            </Link>
                            <img className="" src="box.png" alt="photo" />
                          </div>
                          <h5 className="fw-bold my-2 subtitle">
                            {value.title}
                          </h5>
                          <div className="d-flex align-items-center">
                            <p className="mb-0 bg_success aksiya__">
                              {value.aksiya_}
                            </p>
                            <p className="mb-0 text_secondary aksiya ms-4">
                              {value.aksiya}
                            </p>
                          </div>
                          <h4 className="fw-bold price mb-0 mt-2">
                            <span className="big_text mb-0">
                              {value.big_price}
                            </span>
                            {value.price}
                          </h4>
                          <div className="d-flex justify-content-between align-items-center ">
                            <p className="mb-0 desc">{value.desc}</p>
                            <button
                              onClick={() => saveProduct(index)}
                              className="border-0 save_btn"
                            >
                              <img src="orange.png" alt="photo" />
                            </button>
                          </div>
                        </div>
                        <p className="descripton px-2">
                          Экран (6.5", Super AMOLED, 2400x1080)/ Qualcomm
                          Snapdragon 720G (2 x 2.3 ГГц + 6 x 1.8 ГГц)/ основная
                          квадро-камера: 64 Мп + 12 Мп + 5 Мп + 5 Мп,
                          фронтальная 32 Мп/ RAM 4 ГБ/ 128 ГБ встроенной памяти
                          + microSD (до 1 ТБ)/ 3G/ LTE/ GPS/ A-GPS/ ГЛОНАСС/
                          BDS/ поддержка 2х SIM-карт (Nano-SIM)/ Android 11.0
                          (One UI)/ 4500 мА*ч
                        </p>
                      </div>
                    </div>
                  );
                })}
                <div className="my-2 bottom_text">
                  <h1 className="text my-4">
                    Часто задаваемые вопросы про Смартфоны
                  </h1>
                  <ul>
                    {bottomText.map((value, index) => {
                      return (
                        <li className="li">
                          <img className="me-1" src="finger.png" alt="" />
                          {value.title}
                        </li>
                      );
                    })}
                  </ul>
                  <div className="border_ my-4"></div>
                  <div className="d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon className="icon me-3" icon={faInstagram} />
                    <FontAwesomeIcon className="icon me-3" icon={faTelegram} />
                    <FontAwesomeIcon className="icon" icon={faFacebook} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rightSide mt-5 px-2">
            <div className="row w-100 mt-5">
              {rightSide.map((value, index) => {
                return (
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-12 col-xxl-12 mb-4">
                    <div className="right_flex d-xl-flex">
                      <div className="d-flex justify-content-center align-items-center">
                        <img
                          className="me-3 phone"
                          src={value.img}
                          alt="photo"
                        />
                      </div>
                      <div>
                        <h5 className="fw-bold my-2 subtitle">{value.title}</h5>
                        <div className="d-flex justify-content-between">
                          <p className="mb-0 bg_success aksiya__">
                            {value.aksiya_}
                          </p>
                          <p className="mb-0 text_secondary aksiya">
                            {value.aksiya}
                          </p>
                        </div>
                        <h4 className="fw-bold price mb-0">
                          <span className="big_text mb-0">
                            {value.big_price}
                          </span>
                          {value.price}
                        </h4>
                        <div className="d-flex justify-content-between align-items-center">
                          <p className="mb-0 desc">{value.desc}</p>
                          <button
                            // onClick={() => saveProduct(index)}
                            className="border-0 save_btn"
                          >
                            <img src="orange.png" alt="photo" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="my-2 d-none bottom_block_text">
            <h1 className="text my-4">
              Часто задаваемые вопросы про Смартфоны
            </h1>
            <ul>
              {bottomText.map((value, index) => {
                return (
                  <li className="li" key={index}>
                    <img className="me-1" src="finger.png" alt="" />
                    {value.title}
                  </li>
                );
              })}
            </ul>
            <div className="border_ my-4"></div>
            <div className="d-flex justify-content-center align-items-center">
              <FontAwesomeIcon className="icon me-3" icon={faInstagram} />
              <FontAwesomeIcon className="icon me-3" icon={faTelegram} />
              <FontAwesomeIcon className="icon" icon={faFacebook} />
            </div>
          </div>
        </div>
        <div
          // modal_product
          className={`row justify-content-center align-items-center ${
            openInput ? "active" : ""
          }`}
        >
          <div className="col-6 col-md-4 col-lg-4 col-xl-3 col-xxl-2 ">
            <div className="p-4 bg-white  input_group">
              <h3 className="text-center fw-bold">Оставь заявку</h3>
              <input
                type="text"
                className="form-control"
                placeholder="Твоё имя *"
              />
              <input
                type="text"
                className="form-control my-3"
                placeholder="Твой номер телефона *"
              />
              <input
                type="text"
                className="form-control"
                placeholder="Твой номер телеграм *"
              />
              <div className="d-flex justify-content-center align-items-center mt-3">
                <Button className="button">Оставить заявку</Button>
                <Button onClick={showInput} className="times">
                  <b>
                    <CloseIcon className="icon fw-bold" />
                  </b>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </ProductWrapper>
    </Container>
  );
};

{
}

export default Product;
