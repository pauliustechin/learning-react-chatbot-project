import { useState } from "react";
import { Chatbot } from "supersimpledev";

export function ChatInput({ chatMessages, setChatMessages }) {
  // const [inputText, setInputText] = React.useState('');
  const [inputText, setInputText] = useState("");

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function checkInput(event) {
    if (
      event.key === "Enter" &&
      inputText !== "Loading..." &&
      inputText !== ""
    ) {
      sendMessage();
    } else if (event.key === "Escape") {
      setInputText("");
    } else if (inputText !== "Loading..." && inputText !== "" && !event.key) {
      sendMessage();
    }
  }

  async function sendMessage() {
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ];

    setInputText("Loading...");

    const response = await Chatbot.getResponseAsync(inputText);

    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);

    setInputText("");
  }

  return (
    <div className="chat-input">
      <input
        placeholder="Send a message to Chatbot"
        size="30"
        onChange={saveInputText}
        onKeyDown={checkInput}
        value={inputText}
        className="input-field"
      />
      <button onClick={checkInput} className="send-button">
        Send
      </button>
    </div>
  );
}
