import styled from "styled-components";

const HeaderWrapper = styled.div`
  .logo {
    height: 50px;
  }
  @media screen and (max-width: 994px) {
    .inputOrder {
      order: 1;
    }
  }
  .search {
    background-color: #ff5314;
    color: #fff;
    border: 1px solid #ff5314;
    border-radius: 0%;
    &:hover {
      background-color: #ff5314;
      color: #fff !important;
    }
  }
  .input-group {
    border: 2px solid #ff5314;
    border-color: #ff5314;
    padding: 5px 0;
    outline: none;
  }
  Button {
    text-transform: capitalize;
    &:hover {
      color: black !important;
    }
  }
  .Categories {
    background-color: #ff5314;
    color: white;
    &:hover {
      background-color: #ff5314;
      color: white !important;
    }
  }
  .CategoriesMenu {
    width: 500px !important;
  }
  .menuItem {
    width: 300px !important;
  }
`;

export default HeaderWrapper;
