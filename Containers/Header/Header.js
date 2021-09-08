import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as t from "../../redux/Types";
import { dispatch } from "../../redux/Store";
import Link from "next/link";
import { useSelector } from "react-redux";
//ss
import { Button, Menu, MenuItem } from "@material-ui/core";
import React, { useState } from "react";
import HeaderWrapper from "../../Wrappers/HeaderWrapper";

const Header = () => {
  // const [searchTerm, setSearchTerm] = useState("");
  // const arrays = useSelector((state) => state.BooksReducer.data);
  // const array = arrays?.results?.books?.filter((value) =>
  //   value.title.toLowerCase().includes(searchTerm.trim().toLowerCase())
  // );
  // const datas = () => {
  //   const action = { type: t.BOOKS_DATA2, payload: array };
  //   dispatch(action);
  // };
  // useEffect(() => {
  //   datas();
  // }, [searchTerm]);
  // datas();

  return (
    <HeaderWrapper>
      <div className="container pt-5">
        <div className="row justify-content-center align-items-center w-100">
          <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 ">
            <img className="w-100 logo" src="logo.png" alt="rasm" />
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-7 order-3 order-sm-3 order-md-3 order-lg-0 inputOrder">
            <div className="d-flex justify-content-center align-items-center">
              <Button className="search px-5">Поиск</Button>
              <input className="w-100 input-group" type="text" />
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-2 order-0 order-sm-0 order-md-0 order-lg-3 iconsOrder">
            <div className="d-flex">
              <Button className="d-block me-2">
                <img src="IconPerson.svg" alt="" />
                <p className="m-0">Покупателям</p>
              </Button>
              <Button className="d-block ms-2">
                <img src="iconBasket.svg" alt="" />
                <p className="m-0">Корзина</p>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* const [anchorEl, setAnchorEl] = useState(null);

const handleOpenMenu = (e) => {
  setAnchorEl(e.currentTarget);
};

const handleMenuClose = () => {
  setAnchorEl(null);
}; */}

      {/* fdjfjf */}
      {/* <div className="w-100">
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
          <MenuItem
            style={{ width: "300px" }}
            className="menuItem"
            onClick={handleMenuClose}
          >
            <Link href="/">
              <a>Акции</a>
            </Link>
          </MenuItem>
          <MenuItem
            style={{ width: "300px" }}
            className="menuItem"
            onClick={handleMenuClose}
          >
            <Link href="/test">
              <a>Смартфоны</a>
            </Link>
          </MenuItem>
          <MenuItem
            style={{ width: "300px" }}
            className="menuItem"
            onClick={handleMenuClose}
          >
            <Link href="/test">
              <a>Техника для кухни</a>
            </Link>
          </MenuItem>
          <MenuItem
            style={{ width: "300px" }}
            className="menuItem"
            onClick={handleMenuClose}
          >
            <Link href="/test">
              <a>Техника для дома</a>
            </Link>
          </MenuItem>
          <MenuItem
            style={{ width: "300px" }}
            className="menuItem"
            onClick={handleMenuClose}
          >
            <Link href="/test">
              <a>Ноутбуки, Пк, Планшеты</a>
            </Link>
          </MenuItem>
          <MenuItem
            style={{ width: "300px" }}
            className="menuItem"
            onClick={handleMenuClose}
          >
            <Link href="/test">
              <a>Телевизоры, аудиотехника</a>
            </Link>
          </MenuItem>
          <MenuItem
            style={{ width: "300px" }}
            className="menuItem"
            onClick={handleMenuClose}
          >
            <Link href="/test">
              <a>Для геймеров</a>
            </Link>
          </MenuItem>
          <MenuItem
            style={{ width: "300px" }}
            className="menuItem"
            onClick={handleMenuClose}
          >
            <Link href="/test">
              <a>Смарт-гаджеты</a>
            </Link>
          </MenuItem>
          <MenuItem
            style={{ width: "300px" }}
            className="menuItem"
            onClick={handleMenuClose}
          >
            <Link href="/test">
              <a>Фото, Видео, авто</a>
            </Link>
          </MenuItem>
          <MenuItem
            style={{ width: "300px" }}
            className="menuItem"
            onClick={handleMenuClose}
          >
            <Link href="/test">
              <a>Дом, Сад</a>
            </Link>
          </MenuItem>
        </Menu>
        active o'rnatish kere va responsiveni to'g'irlash kere
        <Button className="border-end border-dark rounded-0 px-4">
          Скидки
        </Button>
        <Button className="border-end border-dark rounded-0 px-4">
          Смартфоны
        </Button>
        <Button className="border-end border-dark rounded-0 px-4">ТВ</Button>
        <Button className="border-end border-dark rounded-0 px-4">
          Техника для кухни
        </Button>
        <Button className="border-end border-dark rounded-0 px-4">
          Техника для дома
        </Button>
        <Button className="border-end border-dark rounded-0 px-4">
          Ноутбук, ПК, планшет
        </Button>
        <Button className="border-end border-dark rounded-0 px-4">
          Для геймеров
        </Button>
      </div> */}
    </HeaderWrapper>
  );
};

export default Header;
