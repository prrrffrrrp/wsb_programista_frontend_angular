import React from "react";
import { useDispatch } from "react-redux";

export default function ResetButton() {
    const dispatch = useDispatch();

    const resetAllHandler = () => {
        const resetAllAction = {
            type: 'RESET'
        }
        dispatch(resetAllAction)
    }

    return (
        <button onClick={resetAllHandler}>RESET</button>
    );
}
