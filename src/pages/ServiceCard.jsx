import React from 'react';

const ServiceCard = ({ icon, title, description, bgColor, shadowColor }) => {
  return (
    <div className="rounded-xl bg-white px-6 pb-8 mt-2 text-center shadow-2xl border-b-4 border-t-4 border-blue-500">
      <div
        className={`mx-auto mt-4 flex lg:h-16 lg:w-16 w-12 h-12 -translate-y-1 transform items-center justify-center rounded-full ${bgColor} shadow-lg ${shadowColor}/40`}
      >
        {icon}
      </div>
      <h3 className="text-black mb-3 lg:text-2xl text-xl font-medium lg:px-14">{title}</h3>
      <p className="px-4 pb-3 text-sm text-gray-500">{description}</p>
    </div>
  );
};

export default ServiceCard;
