import {
  faFacebook,
  faInstagram,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { bigCategores, categores, phones, rightSide } from "../Data/data";
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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

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

  return (
    <Container>
      <Header />
      <ProductWrapper>
        <div className="d-flex D_flex">
          <div className="LeftSide">
            <div className="container ms-2 mt-1">
              <div className={classes.root}>
                <AppBar position="static">
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
                        <p className="mb-0 me-1 subtitle">От</p>
                        <Button className="btn_secondary px-2 subtitle">
                          3.000.000
                        </Button>
                      </div>
                      <div className="d-flex align-items-center mt-3">
                        <p className="mb-0 mx-2 subtitle">До</p>
                        <Button className="btn_secondary px-2 subtitle">
                          3.000.000
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="row">
                      {bigCategores.map((value, index) => {
                        return (
                          <div className="col-sm-6 col-md-12" key={index}>
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
                          <div className="col-sm-6 col-md-12" key={index}>
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
              <h1 className="title mb-4">Удивляйся и удивляй!</h1>
              <div className="row justify-content-center">
                {phones.map((value, index) => {
                  return (
                    <div
                      className="col-12 col-md-6 col-lg-6 col-xl-4 col-xxl-3 px-1 mb-3 position-relative"
                      key={index}
                    >
                      <div className="cards_border ">
                        <img className="skidka" src="skidka.png" alt="photo" />
                        <div className="px-3">
                          <div className="d-flex justify-content-center align-items-center ps-4 my-3">
                            <img
                              className="me-3 phone_photo"
                              src="phone1.png"
                              alt="photo"
                            />
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
                          <div className="d-flex justify-content-between align-items-center">
                            <p className="mb-0 desc">{value.desc}</p>
                            <button className="border-0 save_btn">
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
                <div className="my-2">
                  <h1 className="text my-4">
                    Часто задаваемые вопросы про Смартфоны
                  </h1>
                  <ul>
                    <li className="li">
                      <img className="me-1" src="finger.png" alt="" /> Какие
                      Смартфоны самые дешевые?
                    </li>
                    <li className="li">
                      <img className="me-1" src="finger.png" alt="" /> Какие
                      Какие Смартфоны самые популярные в 2021 году?
                    </li>
                    <li className="li">
                      <img className="me-1" src="finger.png" alt="" /> Какие
                      Какие Смартфоны актуальны в 2021 году?
                    </li>
                    <li className="li">
                      <img className="me-1" src="finger.png" alt="" /> Какие
                      Какие Смартфоны относятся к преимум сегменту?
                    </li>
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
            {rightSide.map((value, index) => {
              return (
                <div
                  className="col-xl-3 cards_border mb-3 w-100 mt-3"
                  key={index}
                >
                  <div className="right_flex d-xl-flex">
                    <div className="d-flex justify-content-center align-items-center">
                      <img className="me-3 phone" src={value.img} alt="photo" />
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
                      <h4 className="fw-bold price mb-0 mt-2">
                        <span className="big_text mb-0">{value.big_price}</span>
                        {value.price}
                      </h4>
                      <div className="d-flex justify-content-between align-items-center">
                        <p className="mb-0 desc">{value.desc}</p>
                        <button className="border-0 save_btn">
                          <img src="orange.png" alt="photo" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
              );
            })}
          </div>
        </div>
      </ProductWrapper>
    </Container>
  );
};

{
}

export default Product;
