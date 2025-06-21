import React from "react";

interface Props {
  link: string;
  disabled: boolean;
}

const WhatsAppButton: React.FC<Props> = ({ link, disabled }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-success rounded-pill px-4 py-2 mb-3 border-dark"
    aria-disabled={disabled}
    style={{ fontSize: "0.9rem" }}
    onClick={(e) => disabled && e.preventDefault()}
  >
    Ouvrir WhatsApp
  </a>
);

export default WhatsAppButton;
