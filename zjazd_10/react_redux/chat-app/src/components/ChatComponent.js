import React from 'react';
import * as io from 'socket.io-client';

export default class ChatComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myMessage: 'default',
            messages: [
                {
                    authorId: "Tom",
                    text: "Hello!"
                },
                {
                    authorId: "Jan",
                    text: "Witam!"
                }
            ]
        }
    }

    componentDidMount() {
        if (!this.connectionChat) {
            this.connectionChat = io.connect('https://chat-server.fbg.pl');
            this.connectionChat.on('chat message', (message) => {
                this.setState((state) => {
                    return {
                        messages: [...state.messages, message],
                    };
                });
            });
        }
    }

    componentWillUnmount() {
        if (this.connectionChat) {
            this.connectionChat.disconnect();
        }
    }

    sendMessage = () => {
        this.connectionChat.emit('chat message', {
            text: this.state.myMessage,
            authorId: this.props.username,
        });
    }

    handleNewMessage = (e) => {
        this.setState({
            myMessage: e.target.value
        })
    }

    render() {
        return (
            <div class="chat-component-box">
                <h1>Chat Component</h1>
                <div>
                    <input onChange={this.handleNewMessage}/>
                    <button onClick={this.sendMessage}>Wyślij!</button>
                </div>
                <ul>
                    {this.state.messages.map((el, index) =>
                        <li key={index}>
                            <b>{el.authorId}:</b> {el.text}
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}
