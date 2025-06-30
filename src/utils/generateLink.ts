// Fonction utilitaire pour générer un lien WhatsApp à partir d'un numéro et d'un message
export const generateWhatsAppLink = (phone: string, message: string) => {
    // Nettoie le numéro pour ne garder que les chiffres
    const cleaned = phone.replace(/\D/g, '');
    // Retourne le lien WhatsApp formaté, avec le message encodé si présent
    return `https://wa.me/${cleaned}${message ? `?text=${encodeURIComponent(message)}` : ''}`;
  };
  