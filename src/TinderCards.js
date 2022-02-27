import React, { useState } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Elon Musk",
      url: "https://media.gettyimages.com/photos/tesla-head-elon-musk-talks-to-the-press-as-he-arrives-to-to-have-a-picture-id1270402636?k=20&m=1270402636&s=612x612&w=0&h=zU9hlyKysK3DTJWYfuu77AnWKiZ8sNz5s8Jx9dMKJ9Y=",
    },
    {
      name: "Jeff Bezoz",
      url: "https://media.gettyimages.com/photos/amazoncom-founder-and-ceo-jeff-bezos-presents-the-companys-first-the-picture-id450831356?k=20&m=450831356&s=612x612&w=0&h=xtse65yD_T3NXAkl_bhz4BMxNHvGKyXY_t5LPWQJYHE=",
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log("removing:" + nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + "left the sreen!");
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
