import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
    const dispatch = useDispatch();
    const username = useSelector(state => state.username)

    const setUsername = e => {
        const setUsernameAction = {
            type: 'SET_USERNAME',
            payload: e.target.value
        }

        dispatch(setUsernameAction);
    }

    return (
        <div>
            <h1>Profile!</h1>
            <h2> Username: {username}</h2>
            <div>
                <label>Podaj username:</label>
                <input onChange={setUsername} value={username}/>
            </div>
        </div>
    )
}

export default Profile;
