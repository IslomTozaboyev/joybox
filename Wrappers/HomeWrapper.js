import styled from "styled-components";

const HomeWrapper = styled.div`
    .container-grid {
        margin-top: 50px;
        display: grid;
        grid-template-columns: 866px 376px 161px;
        grid-template-rows: 303px 83px 88px;
        color: white;
        .blue {
            background-color: #2525EB;
        }
        .orange {
            background-color: #FF5314;
        }
        .udivi {
            font-family: 'roboto', sans-serif;
            font-size: 38px;
            font-style: normal;
            font-weight: 700;
            line-height: 38px;
            letter-spacing: 0em;
            text-align: left;

        }
        .hayron {
            font-family: Roboto;
            font-size: 68px;
            font-style: normal;
            font-weight: 700;
            line-height: 68px;
            letter-spacing: 0em;
            text-align: left;
            margin: 0;
            padding: 0;
            margin-left: 21px;

        }
        
    }
    .item {
        padding: 12px 33px;
        .threeMobiles {
            margin-top: -100px;
        }
        
    }
    .miniContainer {
        display: grid;
        grid-template-columns: 322px 322px 544px;
        .num {
            /* border: 1px solid black; */

        }
        .num1 {
            grid-template-rows: 1fr;
            max-height: 166px;
        }
        .num2 {
            grid-column-start: 1;
            grid-template-rows: 1fr;
            border: 2px solid white;
        }
        .num3 {
            grid-column: 2/3;
            grid-row: 1/3;
        }
    }
`;


export default HomeWrapper;