import { faAngleDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as t from "../../redux/Types";
import Link from "next/link";
import { useSelector } from "react-redux";
//ss
import { Button, Menu, MenuItem } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import HeaderWrapper from "../../Wrappers/HeaderWrapper";
import { dispatch } from "../../redux/Store";
import { links, pages } from "../../Data/data";
import { useRouter } from "next/dist/client/router";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const data = useSelector((state) => state.BooksReducer.phonesdata);
  const array = data?.filter((value) =>
    value.title.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );

  const savedData = useSelector((state) => state.BooksReducer.saveProduct);

  const datas = () => {
    const action = { type: t.BOOKS_DATA, payload: array };
    dispatch(action);
  };
  useEffect(() => {
    datas();
  }, [searchTerm, array.length]);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const saveproduct = useSelector((state) => state.BooksReducer.saveProduct);
  const produktdata = useSelector((state) => state.BooksReducer.filterdata);

  const saveProduct = () => {
    const data = produktdata.filter((v) => v.save);
    const action = { type: t.SAVE_PRODUCT, payload: data };
    dispatch(action);
  };

  const deleteProduct = (index) => {
    const saveProd = (produktdata[index].save = !produktdata[index].save);
    console.log(saveProd, index);
  };

  return (
    <HeaderWrapper>
      <div className="container pt-4">
        <div className="row justify-content-center align-items-center w-100">
          <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 ">
            <img className="w-100 logo" src="logo.png" alt="rasm" />
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-7 order-3 order-sm-3 order-md-3 order-lg-0 inputOrder">
            <div className="d-flex justify-content-center align-items-center">
              <Button className="search px-5">Поиск</Button>
              <input
                className="w-100 input-group"
                type="text"
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-2 order-0 order-sm-0 order-md-0 order-lg-3 iconsOrder">
            <div className="d-flex position-relative">
              <Button className="d-block me-2">
                <img src="IconPerson.svg" alt="" />
                <p className="m-0">Покупателям</p>
              </Button>
              <Button className="d-block ms-2" onClick={saveProduct}>
                <img src="iconBasket.svg" alt="" />
                <p className="m-0">Корзина</p>
              </Button>
              <div className="korzina">
                {savedData?.map((value, index) => (
                  <div
                    className="d-flex align-items-center mb-3 korzinka"
                    key={index}
                  >
                    <img className="photo me-2" src={value.img} alt="photo" />
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <p className="mb-0 title fw-bold">{value.title}</p>
                        <FontAwesomeIcon
                          className="icon text-end"
                          icon={faAngleDown}
                        />
                        <div className="d-flex align-items-center">
                          <p className="mb-0 me-4 aksiya_">{value.aksiya_}</p>
                          <p className="mb-0 aksiya">{value.aksiya}</p>
                        </div>
                        <p className="mb-0 price fw-bold">{value.price}</p>
                      </div>
                      <div>
                        <h6
                          style={{ cursor: "pointer" }}
                          onClick={() => deleteProduct(index)}
                          className="text-end border-bottom delete"
                        >
                          удалить
                        </h6>
                        <p>{produktdata.lenght}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-100 mt-3 d-flex flex-wrap align-items-center">
          <div>
            <Button
              className="Categories"
              aria-controls="menu"
              disableRipple
              onClick={handleOpenMenu}
              variant="contained"
            >
              <img className="me-1" src="iconCategories.svg" alt="" />
              Категории
              <img className="ms-1" src="iconCtegories2.svg" alt="" />
            </Button>
            <Menu
              className="CategoriesMenu"
              style={{ marginTop: "40px" }}
              id="menu"
              onClose={handleMenuClose}
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
            >
              {pages.map((value, index) => {
                return (
                  <MenuItem
                    key={index}
                    style={{ width: "300px" }}
                    className="menuItem"
                    onClick={handleMenuClose}
                  >
                    <Link href="/">
                      <a>{value.page}</a>
                    </Link>
                  </MenuItem>
                );
              })}
            </Menu>
          </div>
          {/* active o'rnatish kere va responsiveni to'g'irlash kere */}
          <div className="d-flex flex-wrap">
            {links.map((value, index) => {
              return (
                <Link href={value.href} key={index}>
                  <a>
                    <Button
                      style={{ zIndex: "100" }}
                      className={`border_links border-dark rounded-0 px-4 ${
                        value.className
                      } ${router.pathname === value.href ? "active" : ""}`}
                    >
                      {value.link}
                    </Button>
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
        {/* <div className="row res_menu">
          {links.map((value, index) => {
            return (
              <div className="col-4 col-sm-3 my-2 res_padding">
                <Link className="" href={value.href} key={index}>
                  <a>
                    <Button className={`sm_border  px-4 ${value.className}`}>
                      {value.link}
                    </Button>
                  </a>
                </Link>
              </div>
            );
          })}
        </div> */}
      </div>
    </HeaderWrapper>
  );
};

export default Header;
