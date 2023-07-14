import React from "react";
import ToastMessageText from "./ToastMessageText";

const ToastMessage = ({ message }) => {
  const textArray = message.text;
  return (
    <main className='toast__message '>
      <header className='toast__message-title'>{message.title}</header>
      {textArray.map((text, i) => {
        return <ToastMessageText key={i} text={text} />;
      })}
    </main>
  );
};

export default ToastMessage;
