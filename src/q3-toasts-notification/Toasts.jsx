import { useRef, useState } from "react";
import "./Toasts.css";

const Toasts = () => {
  const [toasts, setToasts] = useState([]);
  const timersRef = useRef({});

  const handleClick = (type, message) => {
    const id = new Date().getTime();
    const newToast = [...toasts, { id, type, message }];
    setToasts(newToast);
    timersRef.current[id] = setTimeout(() => removeToast(id), 5000);
  };

  const removeToast = (id) => {
    clearTimeout(timersRef.current[id]);
    delete timersRef.current[id];
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  return (
    <div className="toast-wrapper">
      <h2 className="heading">Toasts</h2>
      <div className="button-container">
        <button onClick={() => handleClick("success", "Success Toast")}>
          Success Toast
        </button>
        <button onClick={() => handleClick("info", "Info Toast")}>
          Info Toast
        </button>
        <button onClick={() => handleClick("warning", "Warning Toast")}>
          Warning Toast
        </button>
        <button onClick={() => handleClick("error", "Error Toast")}>
          Error Toast
        </button>
      </div>
      <div className="toast-container">
        {toasts.map((toast) => (
          <div key={toast.id} className={`toast ${toast.type}`}>
            <span></span>
            <p>{toast.message}</p>
            <button className="close-btn" onClick={() => removeToast(toast.id)}>
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toasts;
