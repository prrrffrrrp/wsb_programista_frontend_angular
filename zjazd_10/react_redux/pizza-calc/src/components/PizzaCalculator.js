import React from "react";
import { useSelector } from "react-redux";

import PizzaQuestion from "./PizzaQuestion";
import PizzaForm from "./PizzaForm";
import PizzaAnswer from "./PizzaAnswer";
import ResetButton from "./ResetButton"

export default function PizzaCalculator() {
    const username = useSelector(state => state.user);
    const numberOfPeople = useSelector(state => state.numberOfPeople)

  return (
    <section>
      <PizzaQuestion/>
      <PizzaForm/>
      <hr />
      <PizzaAnswer/>
      <ResetButton/>
    </section>
  );
}
