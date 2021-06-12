import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Navigation from "./components/Navigation";
import Title from "./components/Title";
import PizzaCalculator from "./components/PizzaCalculator";
import "./style.css";
import { changeUsernameAction } from "./store/actions/globalActions";

export default function App() {
  const username = useSelector(state => state.user);
  const dispatch = useDispatch();  

  const changeNameHandler = e => {
      dispatch(changeUsernameAction(e.target.value));
  };

  return (
    <div>
      <Navigation name={username} />
      <main>
        <div className="userNameSection">
          <label>Your name: </label>
          <input value={username} onChange={changeNameHandler} />
        </div>
        <Title name={username} />
        <PizzaCalculator name={username} />
      </main>
    </div>
  );
}
