import styled from "styled-components";

const ProductCardWrapper = styled.div`
    Button {
        box-shadow: none;
        border-radius: 0;
        &:hover {
            box-shadow: none;
            
        }
    }
    h1 {
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 45.3237px;
        line-height: 100%;
    }
    .badge {
        background-color: #D3E38C;
    }
    .firstContainer {
        background-color: #eff9fe;
        .smallimg {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .bigimg {
            display: flex !important;
            justify-content: center !important;
            width: 530px !important;
            max-height: 530px;
            margin-left: -100px;
        }
        .colorBoxes {
            display: flex;
            .colorBox {
                border: 2px solid black;
                border-radius: 10px;
            }
            .black {
                background-color: black;
                height: 40px;
                width: 40px;            
            }
            .white {
                background-color: white;
                height: 40px;
                width: 40px;
            }
            .green {
                background-color: #6EB290;
                height: 40px;
                width: 40px;
            }
            .gray {
                background-color: #EEEDED;
                height: 40px;
                width: 40px;
            }
        }
        .memorie {
            display: flex;
            .whiteBox {
                border: 2px solid black;
                border-radius: 10px;
                background-color: white;
                text-align: center;
                height: 33px;
                width: 65px;
                font-weight: bold;
            }
        }
        .prices {
            h4 {
                text-decoration: line-through;
                color: gray;
            }
            .rentPrice {
                text-decoration: underline;
                color: gray;
            }
        }
        Button {
            width: 100%;
            background-color: #FF5314;
            color: white;
            margin-bottom: 20px;
        }
        .link-korzinka {
            text-decoration: underline;
            color: gray;
        }
        .characteristic {
            border: 2px solid blue;
            width: 100%;
            .link-characteristic {
                color: blue !important;
            }
        }
        /* Нечетные строки */
        ul li:nth-child(odd){
	        background: #ceeefc;
            list-style-type: disc;
            list-style-position: inside;
            padding: 5px 0;
            padding-left: 10px;
            font-weight: bold;
        }
        
        /* Четные строки */
        ul li:nth-child(even){
            background: transparent;
            list-style-type: disc;
            list-style-position: inside;
            padding: 5px 0;
            padding-left: 10px;
            font-weight: bold;
        }
        /* @media screen and (max-width:1300px) {
            .characteristic {
            }
        } */
    }
    .newProducts {
        display: flex;
        justify-content: center;
        background-color: #FF5314;
        color: white;
        margin: 20px auto;
    }
    //Swiper
    #app { height: 100% }
    html,
    body {
    position: relative;
    height: 100%;
    }

    body {
    background: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #000;
    margin: 0;
    padding: 0;
    }

    .swiper {
    width: 100%;
    height: 100%;
    }

    .swiper-slide {
    text-align: center;
    /* font-size: 18px; */
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    }

    .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    }
`;

export default ProductCardWrapper;