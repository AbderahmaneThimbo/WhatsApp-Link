// Composant pour afficher le QR Code du lien WhatsApp
import React from "react";
import { QRCodeSVG } from "qrcode.react";

// Props attendues : link (URL à encoder en QR Code)
interface Props {
  link: string;
}

const QRCodeDisplay: React.FC<Props> = ({ link }) =>
  link ? <QRCodeSVG value={link} size={150} /> : null;

export default QRCodeDisplay;
