import { useState, useEffect } from 'react';
import { Truck, Package, MapPin, Cross, Radio, Bike } from 'lucide-react';

const DeliveryAnimation = () => {
  const [vehicleIndex, setVehicleIndex] = useState(0);
  
  const vehicles = [
    { icon: Bike, label: 'Motorcycle' },
    { icon: Truck, label: 'Van' },
    { icon: Radio, label: 'Drone' }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setVehicleIndex((prev) => (prev + 1) % vehicles.length);
    }, 3000); // Change vehicle every 3 seconds
    
    return () => clearInterval(interval);
  }, []);
  
  const CurrentVehicle = vehicles[vehicleIndex].icon;
  
  return (
    <div className="relative w-full h-24 overflow-hidden">
      {/* Route Line */}
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary/60 to-primary/20 transform -translate-y-1/2"></div>
      
      {/* Start Point */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 animate-pulse">
        <MapPin className="w-6 h-6 text-primary" />
      </div>
      
      {/* Hospital Destination */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 animate-pulse">
        <Cross className="w-6 h-6 text-red-500" />
      </div>
      
      {/* Delivery Vehicle Animation */}
      <div className="absolute top-1/2 transform -translate-y-1/2 animate-delivery-ride">
        <div className="flex items-center space-x-2">
          <CurrentVehicle className="w-8 h-8 text-primary transition-all duration-500" />
          <Package className="w-4 h-4 text-accent animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default DeliveryAnimation;