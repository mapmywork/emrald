import { CONTACT_INFO } from './constants';

export const generateWhatsAppLink = (message) => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${CONTACT_INFO.WHATSAPP_NUMBER}?text=${encodedMessage}`;
};

export const generateBookingMessage = (data) => {
  return `🚗 NEW BOOKING ENQUIRY
Emarald Wedding Cars

Customer:
${data.name}

Phone:
${data.phone}

Service:
${data.service}

Vehicle:
${data.vehicle}

Pickup:
${data.pickup}

Destination:
${data.destination}

Date:
${data.date}

Duration:
${data.duration}

Passengers:
${data.passengers || 'N/A'}

Special Requirements:
${data.message || 'None'}

Please share availability and pricing.`;
};

export const generateGeneralEnquiryMessage = () => {
  return `Hello Emarald Wedding Cars,

I would like to enquire about your car rental services.

Service: 
Vehicle: 
Date: 
Location: 
Duration: 

Please share availability and pricing.

Thank you.`;
};
