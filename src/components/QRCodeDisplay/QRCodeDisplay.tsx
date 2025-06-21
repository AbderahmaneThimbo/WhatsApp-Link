import React from "react";
import { QRCodeSVG } from "qrcode.react";

interface Props {
  link: string;
}

const QRCodeDisplay: React.FC<Props> = ({ link }) =>
  link ? <QRCodeSVG value={link} size={150} /> : null;

export default QRCodeDisplay;
