import "./Toast.css";
import ToastButton from "./ToastButton";
import ToastMessage from "./ToastMessage";

const Toast = ({ message, children }) => {
  return (
    // <div className={`toast toast-${message.title}`}>
    //   <ToastMessage message={message} />
    //   <ToastButton />
    // </div>

    <div className={`toast toast-${message.title}`}>{children}</div>
  );
};

export default Toast;
