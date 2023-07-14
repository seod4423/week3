import React from "react";

const ToastButton = ({ title }) => {
  if (title === "Error") {
    return (
      <div className='toast__button-wrapper'>
        <button className='toast__button'>Allow</button>
        <button className='toast__button'>Dismiss</button>
      </div>
    );
  } else {
    return <button className='toast__button'>Dismiss</button>;
  }
};

export default ToastButton;
