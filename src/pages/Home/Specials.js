import React from "react";
import { Link } from "react-router-dom";
import greekSaladImg from "../../assets/greek-salad.jpg";

const SPECIAL_MENU_ITEMS = [
  {
    name: "Greek Salad",
    image: greekSaladImg,
    price: 20,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
  },
  {
    name: "Greek Salad",
    image: greekSaladImg,
    price: 20,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
  },
  {
    name: "Greek Salad",
    image: greekSaladImg,
    price: 20,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
  },
];

const Specials = () => {
  return (
    <section id="specials" className="container">
      <div id="specials-header">
        <h2>Specials</h2>
        <button>Order Online</button>
      </div>
      <div id="specials-list">
        {SPECIAL_MENU_ITEMS.map(
          ({ name, image, price, description }, index) => (
            <SpecialsCard
              name={name}
              image={image}
              price={price}
              description={description}
              key={index}
            />
          )
        )}
      </div>
    </section>
  );
};

const SpecialsCard = ({ name, image, price, description }) => {
  return (
    <div className="specials-card">
      <img src={image} className="specials-card-image" alt={name} />
      <div className="specials-card-texts">
        <div className="specials-card-header">
          <h3>{name}</h3>
          <span>{price}</span>
        </div>
        <p>{description}</p>
        <Link to="/order">Order a delivery</Link>
      </div>
    </div>
  );
};

export default Specials;
