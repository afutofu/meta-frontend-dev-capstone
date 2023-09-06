import React from "react";
import avatarMan from "../../assets/avatar-man.jpg";

const RATINGS = [
  {
    name: "John Doe",
    image: avatarMan,
    rating: 5,
    description: "Lorem ipsum dolor sit amet.",
  },
  {
    name: "Alex Smith",
    image: avatarMan,
    rating: 4.5,
    description: "Lorem ipsum dolor sit amet.",
  },
  {
    name: "Jane Jackson",
    image: avatarMan,
    rating: 4.8,
    description: "Lorem ipsum dolor sit amet.",
  },
  {
    name: "Sarah Tran",
    image: avatarMan,
    rating: 4.9,
    description: "Lorem ipsum dolor sit amet.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="container">
      <div id="testimonials-header">
        <h2>Testimonials</h2>
      </div>
      <div id="testimonials-list">
        {RATINGS.map(({ name, image, rating, description }, index) => (
          <TestimonialsCard
            name={name}
            image={image}
            rating={rating}
            description={description}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};

const TestimonialsCard = ({ name, image, rating, description }) => {
  return (
    <div className="testimonials-card">
      <div>{rating}/5</div>
      <div className="testimonials-card-header">
        <img src={image} className="testimonials-card-image" alt={name} />
        <h3>{name}</h3>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default Testimonials;
