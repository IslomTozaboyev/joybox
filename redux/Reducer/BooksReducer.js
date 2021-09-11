import * as t from "../Types";

const initialState = {
  chekbox: -1,
  chekbox2: -1,
  phonesdata: [],
  filterdata: [],
  saveProduct: [],
};

const BooksReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.CHEKED:
      return { ...state, chekbox: action.payload };

    case t.CHEKED2:
      return { ...state, chekbox: action.payload };
    case t.PHONES_DATA:
      return { ...state, phonesdata: action.payload };
    case t.BOOKS_DATA:
      return { ...state, filterdata: action.payload };
    case t.SAVE_PRODUCT:
      return { ...state, saveProduct: action.payload };
    default:
      return state;
  }
};

export default BooksReducer;
