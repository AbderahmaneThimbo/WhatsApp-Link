import { useState, useEffect } from "react";
import PhoneInput from "./components/PhoneInput/PhoneInput";
import MessageInput from "./components/MessageInput/MessageInput";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";
import QRCodeDisplay from "./components/QRCodeDisplay/QRCodeDisplay";
import { generateWhatsAppLink } from "./utils/generateLink";
import "./theme";
import "./App.css";

function App() {
  const [phone, setPhone] = useState(
    () => localStorage.getItem("lastPhone") || ""
  );
  const [message, setMessage] = useState("");
  const link = phone ? generateWhatsAppLink(phone, message) : "";

  useEffect(() => {
    localStorage.setItem("lastPhone", phone);
  }, [phone]);

  return (
    <div className="min-vh-100 ">
      <div className="container py-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="h3">Générateur de lien WhatsApp</h1>
        </div>

        <div className="">
          <PhoneInput value={phone} onChange={setPhone} />
          <MessageInput value={message} onChange={setMessage} />
          <div className="d-flex justify-content-center">
            <WhatsAppButton link={link} disabled={!phone} />
          </div>
          <div className="d-flex justify-content-center">
            <QRCodeDisplay link={link} />
          </div>
          <footer className="text-center mt-5 small text-muted">
            <p>Made by Abderahmane Thimbo — {new Date().getFullYear()}</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
