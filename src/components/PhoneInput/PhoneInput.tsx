// Composant pour la saisie du numéro de téléphone avec gestion de l'indicatif pays
import React from "react";
import PhoneInputLib from "react-phone-number-input";
import "react-phone-number-input/style.css";

// Props attendues : value (numéro actuel) et onChange (callback de modification)
interface Props {
  value: string;
  onChange: (value: string) => void;
}

const PhoneInput: React.FC<Props> = ({ value, onChange }) => (
  <PhoneInputLib
    value={value}
    onChange={(val) => onChange(val ?? "")}
    defaultCountry="MR"
    international
    withCountryCallingCode
    className="form-control mb-3 border-success shadow-sm"
  />
);

export default PhoneInput;
