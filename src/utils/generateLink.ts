export const generateWhatsAppLink = (phone: string, message: string) => {
    const cleaned = phone.replace(/\D/g, '');
    return `https://wa.me/${cleaned}${message ? `?text=${encodeURIComponent(message)}` : ''}`;
  };
  