import React from "react";
import { useSelector } from "react-redux";

export default function PizzaAnswer() {
    const username = useSelector(state => state.user);
    const numberOfPeople = useSelector(state => state.numberOfPeople);

  return (
    <h3>
      {username}, you should probably order {numberOfPeople / 2} pizzas!
    </h3>
  );
}
