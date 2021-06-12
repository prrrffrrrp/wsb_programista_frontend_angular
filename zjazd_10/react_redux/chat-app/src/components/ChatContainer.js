import { useSelector } from "react-redux";
import ChatComponent from "./ChatComponent";

const ChatContainer = () => {
    const username = useSelector(state => state.username);

    return (
        <div>
            <h1>ChatContainer!</h1>
            <h2>You are user: {username}</h2>
            <ChatComponent username={username}/>
        </div>


    )
}

export default ChatContainer;
