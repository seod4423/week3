import "./App.css";
import Toast from "./components/Toast";
import ToastButton from "./components/ToastButton";
import ToastMessage from "./components/ToastMessage";

function App() {
  const messageArray = [
    {
      title: "Success",
      text: ["Right on! Your account has been updated"],
    },
    {
      title: "Warning",
      text: ["Hmmm. Something doesn't look right.", "This is second paragraph"],
    },
    {
      title: "Error",
      text: ["Uh oh! Something went terribly wrong!"],
    },
  ];

  return (
    // <div className='wrapper'>
    //   {messageArray.map((message, i) => {
    //     return <Toast key={i} message={message} />;
    //   })}
    // </div>
    <div className='wrapper'>
      <Toast message={messageArray[0]}>
        <ToastMessage message={messageArray[0]} />
        {/* <ToastButton /> */}
      </Toast>
      <Toast message={messageArray[1]}>
        <ToastMessage message={messageArray[1]} />
        <ToastButton />
      </Toast>
      <Toast message={messageArray[2]}>
        <ToastMessage message={messageArray[2]} />
        <ToastButton title={messageArray[2].title} />
      </Toast>
    </div>
  );
}

export default App;
