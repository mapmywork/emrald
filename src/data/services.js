import { Car, Gem, Briefcase, Users } from 'lucide-react';

export const services = [
  {
    id: "self-drive",
    title: "Self Drive Car Rental",
    description: "Enjoy the freedom to drive yourself with comfortable and well-maintained rental cars.",
    icon: Car,
    ctaText: "Enquire Now",
  },
  {
    id: "luxury-wedding",
    title: "Luxury Wedding Cars",
    description: "Make your wedding entrance unforgettable with premium luxury cars for ceremonies, receptions, and special occasions.",
    icon: Gem,
    ctaText: "Plan Your Wedding Ride",
  },
  {
    id: "taxi-services",
    title: "Taxi Services",
    description: "Reliable taxi transportation for local and outstation journeys.",
    icon: Briefcase,
    ctaText: "Book a Taxi",
  },
  {
    id: "tourist-bus",
    title: "Tourist Bus",
    description: "Comfortable group transportation for tours, events, family trips, and larger groups.",
    icon: Users,
    ctaText: "Enquire for Groups",
  }
];
