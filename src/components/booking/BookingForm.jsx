import React from 'react';
import { useForm } from 'react-hook-form';
import { generateBookingMessage, generateWhatsAppLink } from '../../utils/whatsapp';

const BookingForm = ({ prefilledService = '', prefilledVehicle = '', onSuccess }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      service: prefilledService,
      vehicle: prefilledVehicle,
    }
  });

  const onSubmit = (data) => {
    const message = generateBookingMessage(data);
    const whatsappUrl = generateWhatsAppLink(message);
    window.open(whatsappUrl, '_blank');
    if (onSuccess) onSuccess();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Customer Details */}
        <div className="col-span-1 md:col-span-2 text-gold-400 font-playfair font-semibold border-b border-gray-800 pb-2 mb-2">
          Customer Details
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
          <input 
            type="text" 
            {...register('name', { required: 'Name is required' })}
            className="w-full bg-[#0f141a] border border-gray-800 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors"
            placeholder="John Doe"
          />
          {errors.name && <span className="text-red-400 text-xs mt-1">{errors.name.message}</span>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number *</label>
          <input 
            type="tel" 
            {...register('phone', { required: 'Phone number is required' })}
            className="w-full bg-[#0f141a] border border-gray-800 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors"
            placeholder="+91 98765 43210"
          />
          {errors.phone && <span className="text-red-400 text-xs mt-1">{errors.phone.message}</span>}
        </div>

        {/* Booking Details */}
        <div className="col-span-1 md:col-span-2 text-gold-400 font-playfair font-semibold border-b border-gray-800 pb-2 mb-2 mt-4">
          Booking Details
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Service Type *</label>
          <select 
            {...register('service', { required: 'Service is required' })}
            className="w-full bg-[#0f141a] border border-gray-800 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors appearance-none"
          >
            <option value="">Select a service</option>
            <option value="Self Drive Car Rental">Self Drive Car Rental</option>
            <option value="Luxury Wedding Cars">Luxury Wedding Cars</option>
            <option value="Taxi Services">Taxi Services</option>
            <option value="Tourist Bus">Tourist Bus</option>
          </select>
          {errors.service && <span className="text-red-400 text-xs mt-1">{errors.service.message}</span>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Vehicle (Optional)</label>
          <input 
            type="text" 
            {...register('vehicle')}
            className="w-full bg-[#0f141a] border border-gray-800 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors"
            placeholder="E.g., Luxury Sedan"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Pickup Location *</label>
          <input 
            type="text" 
            {...register('pickup', { required: 'Pickup location is required' })}
            className="w-full bg-[#0f141a] border border-gray-800 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors"
            placeholder="Enter pickup location"
          />
          {errors.pickup && <span className="text-red-400 text-xs mt-1">{errors.pickup.message}</span>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Destination *</label>
          <input 
            type="text" 
            {...register('destination', { required: 'Destination is required' })}
            className="w-full bg-[#0f141a] border border-gray-800 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors"
            placeholder="Enter destination"
          />
          {errors.destination && <span className="text-red-400 text-xs mt-1">{errors.destination.message}</span>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Date *</label>
          <input 
            type="date" 
            {...register('date', { required: 'Date is required' })}
            className="w-full bg-[#0f141a] border border-gray-800 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors [color-scheme:dark]"
          />
          {errors.date && <span className="text-red-400 text-xs mt-1">{errors.date.message}</span>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Duration *</label>
          <input 
            type="text" 
            {...register('duration', { required: 'Duration is required' })}
            className="w-full bg-[#0f141a] border border-gray-800 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors"
            placeholder="E.g., 2 Days, 5 Hours"
          />
          {errors.duration && <span className="text-red-400 text-xs mt-1">{errors.duration.message}</span>}
        </div>

        {/* Optional Details */}
        <div className="col-span-1 md:col-span-2 text-gold-400 font-playfair font-semibold border-b border-gray-800 pb-2 mb-2 mt-4">
          Additional Details (Optional)
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Number of Passengers</label>
          <input 
            type="number" 
            {...register('passengers')}
            className="w-full bg-[#0f141a] border border-gray-800 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors"
            placeholder="E.g., 4"
            min="1"
          />
        </div>

        <div className="col-span-1 md:col-span-2">
          <label className="block text-sm font-medium text-gray-300 mb-2">Special Requirements</label>
          <textarea 
            {...register('message')}
            rows="3"
            className="w-full bg-[#0f141a] border border-gray-800 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors"
            placeholder="Any specific requests or requirements..."
          ></textarea>
        </div>

      </div>

      <div className="pt-6">
        <button 
          type="submit"
          className="w-full bg-gold-600 hover:bg-gold-400 text-primary px-8 py-4 rounded-sm font-medium text-lg transition-colors"
        >
          Check Availability
        </button>
        <p className="text-center text-gray-500 text-xs mt-4">
          Clicking this will generate a WhatsApp message to our team.
        </p>
      </div>
    </form>
  );
};

export default BookingForm;
