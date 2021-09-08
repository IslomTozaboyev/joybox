import * as t from "../Types";

const initialState = {
  chekbox: -1,
  chekbox2: -1,
};

const BooksReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.CHEKED:
      return { ...state, chekbox: action.payload };

    case t.CHEKED2:
      return { ...state, chekbox: action.payload };

    default:
      return state;
  }
};

export default BooksReducer;
