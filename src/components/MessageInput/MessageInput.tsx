// Composant pour la saisie d'un message personnalisé (optionnel)
import React from "react";

// Props attendues : value (texte actuel) et onChange (callback de modification)
interface Props {
  value: string;
  onChange: (v: string) => void;
}

const MessageInput: React.FC<Props> = ({ value, onChange }) => (
  <textarea
    className="form-control px-4 py-2 mb-3 border-success shadow-sm"
    rows={3}
    placeholder="Message (optionnel)"
    value={value}
    onChange={(e) => onChange(e.target.value)}
  />
);

export default MessageInput;
