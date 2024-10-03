import React, { useState, useEffect } from "react"
import BotMessage from "../Components/chatbot/BotMessage" // Ensure correct casing
import UserMessage from "../Components/chatbot/UserMessage" // Ensure correct casing
import Messages from "../Components/chatbot/Messages" // Ensure correct casing
import Input from "../Components/chatbot/Input" // Ensure correct casing
import API from "./ChatbotAPI"
import "./Css/chatbotstyles.css"
import Header from "../Components/chatbot/Header"

const Chatbot = () => {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        async function loadWelcomeMessage() {
            setMessages([
                <BotMessage
                    key="0"
                    fetchMessage={async () =>
                        await API.GetChatbotResponse("hi")
                    }
                />,
            ])
        }
        loadWelcomeMessage()
    }, [])

    const send = async (text) => {
        const newMessages = messages.concat(
            <UserMessage key={messages.length + 1} text={text} />,
            <BotMessage
                key={messages.length + 2}
                fetchMessage={async () => await API.GetChatbotResponse(text)}
            />
        )
        setMessages(newMessages)
    }

    return (
        <div className="chatbot">
            <Header />
            <Messages messages={messages} />
            <Input onSend={send} />
        </div>
    )
}

export default Chatbot // Exporting the component as default
