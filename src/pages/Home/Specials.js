import React from "react";
import { Link } from "react-router-dom";

const SPECIAL_MENU_ITEMS = [
  {
    name: "Greek Salad",
    price: 20,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
  },
  {
    name: "Greek Salad",
    price: 20,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
  },
  {
    name: "Greek Salad",
    price: 20,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
  },
];

const Specials = () => {
  return (
    <div className="container">
      <div>
        <h2>Specials</h2>
        <button>Order Online</button>
      </div>
      <div>
        {SPECIAL_MENU_ITEMS.map(({ name, price, description }) => (
          <SpecialsCard name={name} price={price} description={description} />
        ))}
      </div>
    </div>
  );
};

const SpecialsCard = ({ name, price, description }) => {
  return (
    <div>
      <img id="specials-card-image" alt={name} />
      <div>
        <h3>{name}</h3>
        <span>{price}</span>
      </div>
      <p>{description}</p>
      <Link to="/order">Order a delivery</Link>
    </div>
  );
};

export default Specials;
