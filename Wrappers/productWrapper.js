import styled from "styled-components";

const ProductWrapper = styled.div`
  width: 100%;
  /* overflow-x: hidden; */
  .MuiTabs-flexContainer {
    display: flex;
    justify-content: space-around !important;
    align-items: center !important;
    padding: 0 !important;
    width: 300px;
  }
  .MuiPaper-elevation4 {
    box-shadow: none;
    padding: 0 !important;
  }
  .MuiBox-root-11,
  .MuiBox-root-31 {
    padding: 0px !important;
  }
  .MuiAppBar-colorPrimary {
    background: white !important;
  }
  .MuiAppBar-colorPrimary {
    width: 310px;
    height: 35px !important;
    border-bottom: 0px !important;
  }
  .MuiTabs-root {
    display: block;
  }
  .MuiTab-root {
    width: 100px !important;
    font-size: 13px;
    min-height: 35px;
    margin: 0;
    padding: 0;
    background: transparent !important;
  }
  .MuiTab-root:nth-child(1) {
    background: #ff5314 !important;
    color: #fff;
  }
  .MuiTab-root:nth-child(2) {
    background: #fff !important;
    color: #ff5314;
    border: 1px solid rgba(168, 160, 160, 1);
  }

  .save_btn {
    background: transparent !important;
  }
  .subtitle {
    font-weight: 700;
    font-size: 15px;
    color: rgba(0, 0, 0, 1);
  }
  .LeftSide {
    width: 340px;
    margin-top: 70px;
    .btn_secondary {
      background-color: rgba(234, 231, 231, 1);
    }

    .checkbox {
      width: 20px;
      height: 20px;
      background-color: #ff5314 !important;
    }
    .box {
      width: 20px;
      height: 20px;
      border: 1px solid #969696;
      background: #eae7e7;
      outline: none;
      border-radius: 2px;

      &.active {
        background-color: #ff5314 !important;
        border: none;
      }
    }
    .icon {
      color: #ff5314 !important;
      cursor: pointer;
    }
    .orange_btn {
      background-color: #fff;
      color: #ff5314;
      border: 1px solid rgba(0, 0, 0, 0.4);
      padding: 6px 20px;
      font-size: 12px;
      border-radius: 0 5px 5px 0;

      &.active {
        background-color: #ff5314;
        padding: 7px 20px;
        border: none;
        color: #fff;
        border-radius: 5px 0 0 5px;
      }
    }
  }
  .Sidebar {
    flex: 3 !important;
    .text {
      font-weight: bold;
      font-size: 32.0473px;
      line-height: 100%;
    }
    .border_ {
      border-bottom: 3px solid #969696;
      width: 402px;
      margin: auto;
    }
    .icon {
      width: 30.2px;
      height: 30px;
    }
    ul {
      .li {
        font-weight: bold;
        font-size: 24.0473px;
        line-height: 100%;
      }
    }
    .cards_border {
      border: 3px solid #2525eb;
      background-color: white;
      width: 100%;
      height: auto;
      z-index: 600;
      .skidka {
        width: 135px;
        height: 33.43px;
      }
      .phone_photo {
        width: 109px;
        height: 138px;
      }
      .descripton {
        height: 0px;
        overflow: hidden;
        font-size: 11.5px;
      }
      &:hover {
        position: absolute;
        max-width: 100% !important;
        top: 0;
        left: 0;
        right: 0;
      }
      &:hover .descripton {
        height: auto;
      }
    }

    .title {
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
      font-size: 42px;
      font-weight: 700;
    }
    .text_secondary {
      background-color: #e2e38c;
      font-weight: 500;
      font-size: 15.285px;
    }
    .bg_success {
      color: rgba(168, 160, 160, 1);
      font-weight: 500;
      font-size: 16.285px;
      text-decoration: line-through 1px rgba(0, 0, 0, 1);
    }
    .subtitle {
      font-weight: 700;
      font-size: 14.2732px;
    }
    .aksiya__ {
      font-size: 10.285px;
    }
    .aksiya {
      font-size: 8.22803px;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.025em;
    }
    .price,
    .big_text {
      font-weight: bold;
      line-height: 92%;
      letter-spacing: -0.03em;
      text-transform: uppercase;
      color: #000000;
    }
    .price {
      font-size: 21.5289px;
      .big_text {
        font-size: 25.5289px;
      }
    }
    .desc {
      color: rgba(168, 160, 160, 1);
      border-bottom: 1px solid rgba(200, 200, 200, 1);
      font-weight: 500;
      font-size: 10.285px;
      line-height: 115.5%;
      /* or 12px */

      letter-spacing: 0.025em;
      text-decoration-line: underline;
    }
  }
  .rightSide {
    flex: 1;
    .phone {
      width: 84.1px;
      height: 116px;
    }
    .desc {
      font-size: 15px;
    }
    .bg_success {
      color: rgba(168, 160, 160, 1);
      font-weight: 500;
      font-size: 16.285px;
      text-decoration: line-through 1px rgba(0, 0, 0, 1);
    }
    .aksiya {
      background-color: #e2e38c;
    }
    .price {
      font-size: 18px;
    }
    .big_text {
      font-size: 25px;
    }
  }
  .myinput {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
  .myinput[type="checkbox"]:before {
    position: relative;
    display: block;
    width: 20px;
    height: 20px;
    content: "";
    background: #eae7e7 !important;
  }

  .myinput[type="checkbox"]:after {
    position: relative;
    display: block;
    left: 0px;
    top: -20px;
    width: 20px;
    height: 20px;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.4);
    border-radius: 3px;
    content: "";
    background-repeat: no-repeat;
    background-position: center;
  }

  .myinput[type="checkbox"]:checked:after {
    background-color: #ff5314;
  }

  /* Large checkboxes */
  .myinput.large {
    height: 22px;
    width: 22px;
  }

  .myinput.large[type="checkbox"]:before {
    width: 20px;
    height: 20px;
  }

  .myinput.large[type="checkbox"]:after {
    top: -20px;
    width: 16px;
    height: 16px;
  }

  @media screen and (max-width: 1200px) {
    .D_flex {
      display: flex;
      flex-wrap: wrap;
    }
    .LeftSide {
      display: flex;
      flex: 1;
    }
    .Sidebar {
      flex: 1;
    }
    .rightSide {
      flex: 1;
    }
  }

  @media screen and (max-width: 1000px) {
    .D_flex {
      display: grid;
      flex-wrap: wrap;
    }
    .LeftSide {
      width: 400px;
    }
    .Sidebar {
      flex: 1;
    }
    .rightSide {
      flex: 1;
    }
  }

  @media screen and (max-width: 800px) {
    .D_flex {
      display: grid !important;
      flex-wrap: wrap;
    }
    .LeftSide {
      flex: 1;
    }
    .Sidebar {
      width: 100%;
    }
    .rightSide {
      flex: 1;
    }
  }
`;

export default ProductWrapper;
