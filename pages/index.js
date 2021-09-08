import HomeWrapper from "../Wrappers/HomeWrapper";
import Container from "../Containers/Container";
import Header from "../Containers/Header/Header";

export default function Home() {
  return (
    <HomeWrapper>
      <Container>
        <Header />
        {/* <div className="container-grid">
          <div className="item  d-flex item_1 blue">
            <div className="miniContainer">
              <div className="num num1">
                <p className="udivi">Удиви своих друзей!</p>
              </div>
              <div className="num num2">
                <p>PlayStation 5 Digital version</p>
                <p>редактируетсячерез админ панель</p>
                <p className="polPrice d-flex justify-content-end">
                  18,577,000
                </p>
                <div className="Price d-flex justify-content-end">
                  <p>от15,845,000</p>
                </div>
                <p className="d-flex justify-content-end">
                  Магазин бытовой техники и электроники
                </p>
                <img src="logo3.png" alt="" />
              </div>
              <div className="num num3">
                <img className="threeMobiles" src="threeMobiles.svg" alt="" />
                <p className="udivi threeMobiles">16:9</p>
              </div>
            </div>
          </div>
          <div className="item item_2 orange px-0 d-flex align-items-center">
            <p className="hayron">Удивляй! Hayron qil!</p>
          </div>
          <div className="item item_3 blue">3</div>
          <div className="item item_4 orange">4</div>
          <div className="item item_5 blue p-0 m-0">
            <img src="logo2.svg" alt="" />
          </div>
          <div className="item item_6 orange">6</div>
          <div className="item item_7 blue">
            <div className="">
              <button className="bg-transparent text-white border-0 border-start border-dark">
                Скидки
              </button>
              <button className="bg-transparent text-white border-0 border-start border-dark">
                Подборки
              </button>
              <button className="bg-transparent text-white border-0 border-start border-dark">
                Товар дня
              </button>
              <button className="bg-transparent text-white border-0 border-start border-dark">
                Новинки
              </button>
            </div>
          </div>
          <div className="item item_8 orange">8</div>
          <div className="item item_9 blue">9</div>
        </div> */}
      </Container>
    </HomeWrapper>
  );
}
