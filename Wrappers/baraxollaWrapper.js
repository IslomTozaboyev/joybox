import styled from "styled-components";

const BaraxollaWrapper = styled.div`
  width: 100%;

  .text {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    line-height: 100%;
  }
  ul {
    .li {
    }
  }
  .MuiTabs-flexContainer {
    background: white !important;
    color: #000;
    box-shadow: none !important;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100% !important;
  }

  .Sidebar {
    width: 100%;

    .item_one {
      background-color: #ff5314;
      color: #fff !important;
    }
    .item_two {
      color: #ff5314;
      border: 1px solid #ff5314;
      margin: 10px 0;
    }
    .item_three {
      border: 1px solid #a6a6a6;
      color: #000;
      margin-top: 5px;
    }
    .title {
      font-weight: bold;
      font-size: 42.0473px;
      line-height: 100%;
    }
    .subtitle {
      font-size: 14.2732px;
      line-height: 222.5%;
      font-weight: bold;
      letter-spacing: -0.03em;
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
    .model {
      font-size: 18.9907px;
    }
    .aksiya__ {
      font-weight: 500;
      font-size: 10.8783px;
    }
    .aksiya {
      font-weight: 500;
      font-size: 8.70261px;
      text-transform: uppercase;
      line-height: 115.5%;
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
        font-size: 27.0014px;
      }
    }
    .save_btn {
      background: transparent;
    }
    .desc {
      color: rgba(168, 160, 160, 1);
      border-bottom: 1px solid rgba(200, 200, 200, 1);
      font-weight: 500;
      font-size: 10.8783px;
      line-height: 115.5%;
      /* or 12px */

      letter-spacing: 0.025em;
      text-decoration-line: underline;
    }
  }

  @media screen and (max-width: 600px) {
    .MuiTabs-flexContainer {
      display: grid !important;
    }
  }

  @media screen and (max-width: 450px) {
    .MuiTabs-flexContainer {
      display: grid !important;
    }
    .MuiAppBar-colorPrimary {
      width: 345px !important;
    }
  }
`;
export default BaraxollaWrapper;
