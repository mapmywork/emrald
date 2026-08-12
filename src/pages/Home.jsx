import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import FloatingActions from '../components/layout/FloatingActions';
import Hero from '../components/hero/Hero';
import ServicesSection from '../components/services/ServicesSection';
import WeddingSection from '../components/wedding/WeddingSection';
import FleetSection from '../components/fleet/FleetSection';
import WhyChooseUsSection from '../components/common/WhyChooseUsSection';
import HowItWorksSection from '../components/common/HowItWorksSection';
import GallerySection from '../components/gallery/GallerySection';
import TestimonialsSection from '../components/testimonials/TestimonialsSection';
import FaqSection from '../components/faq/FaqSection';
import ContactSection from '../components/common/ContactSection';
import BookingModal from '../components/booking/BookingModal';

const Home = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingPrefills, setBookingPrefills] = useState({ service: '', vehicle: '' });

  const handleOpenBooking = (serviceId = '', vehicleName = '') => {
    // Map serviceId to actual service name if needed
    let serviceName = '';
    if (serviceId === 'self-drive') serviceName = 'Self Drive Car Rental';
    if (serviceId === 'luxury-wedding') serviceName = 'Luxury Wedding Cars';
    if (serviceId === 'taxi-services') serviceName = 'Taxi Services';
    if (serviceId === 'tourist-bus') serviceName = 'Tourist Bus';

    setBookingPrefills({ service: serviceName, vehicle: vehicleName });
    setIsBookingModalOpen(true);
  };

  return (
    <div className="bg-primary min-h-screen">
      <Navbar onBookClick={() => handleOpenBooking()} />
      
      <main>
        <Hero onBookClick={() => handleOpenBooking()} />
        <ServicesSection onBookClick={(serviceId) => handleOpenBooking(serviceId)} />
        <WeddingSection onBookClick={(serviceId) => handleOpenBooking(serviceId)} />
        <FleetSection onBookClick={(vehicleName) => handleOpenBooking('', vehicleName)} />
        <WhyChooseUsSection />
        <HowItWorksSection />
        <GallerySection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
      </main>

      <Footer />
      <FloatingActions onBookClick={() => handleOpenBooking()} />

      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
        prefilledService={bookingPrefills.service}
        prefilledVehicle={bookingPrefills.vehicle}
      />
    </div>
  );
};

export default Home;
