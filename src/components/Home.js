import "./Home.css";
import { homeImage } from "../accets/Images";
import Product from "./Product";

import { sunglass, flowervase, bag, phone } from "../accets/Images";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img src={homeImage} alt="" className="home__image" />
        <div className="home__row">
          <Product
            key={Math.floor(Math.random() * 1000) + 1}
            title="A totallyh random title"
            price={1345.99}
            rating={5}
            image={sunglass}
          />
          <Product
            key={Math.floor(Math.random() * 1000) + 1}
            title="A totallyh random title phone "
            price={145.99}
            rating={4}
            image={flowervase}
          />
        </div>
        <div className="home__row">
          <Product
            key={Math.floor(Math.random() * 1000) + 1}
            title="A totallyh random title phone "
            price={145.99}
            rating={3}
            image={flowervase}
          />
          <Product
            key={Math.floor(Math.random() * 1000) + 1}
            title="A totallyh random title phone "
            price={145.99}
            rating={2}
            image={bag}
          />
          <Product
            key={Math.floor(Math.random() * 1000) + 1}
            title="A totallyh random title phone "
            price={1456.99}
            rating={5}
            image={phone}
          />
        </div>
        <div className="home__row">
          <Product
            key={Math.floor(Math.random() * 1000) + 1}
            title="A totallyh random title flowervase "
            price={1545.99}
            rating={4}
            image={flowervase}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
