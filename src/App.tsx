import { useState, useEffect } from "react";
import PhoneInput from "./components/PhoneInput/PhoneInput";
import MessageInput from "./components/MessageInput/MessageInput";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";
import QRCodeDisplay from "./components/QRCodeDisplay/QRCodeDisplay";
import { generateWhatsAppLink } from "./utils/generateLink";
import "./theme";
import "./App.css";

function App() {
  // État pour le numéro de téléphone, initialisé depuis le localStorage si disponible
  const [phone, setPhone] = useState(
    () => localStorage.getItem("lastPhone") || ""
  );
  // État pour le message personnalisé
  const [message, setMessage] = useState("");
  // Génération du lien WhatsApp à partir du numéro et du message
  const link = phone ? generateWhatsAppLink(phone, message) : "";

  // Sauvegarde automatique du numéro dans le localStorage à chaque modification
  useEffect(() => {
    localStorage.setItem("lastPhone", phone);
  }, [phone]);

  // Rendu principal de l'application
  return (
    <div className="min-vh-100 ">
      <div className="container py-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="h3">Générateur de lien WhatsApp</h1>
        </div>

        <div className="">
          {/* Saisie du numéro de téléphone */}
          <PhoneInput value={phone} onChange={setPhone} />
          {/* Saisie du message optionnel */}
          <MessageInput value={message} onChange={setMessage} />
          <div className="d-flex justify-content-center">
            {/* Bouton pour ouvrir WhatsApp avec le lien généré */}
            <WhatsAppButton link={link} disabled={!phone} />
          </div>
          <div className="d-flex justify-content-center">
            {/* Affichage du QR Code pour le lien WhatsApp */}
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
