import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion'; // For smooth animations

const PRIMARY_BLUE = '#023A9A';

const ContactInfoBar = ({ data }) => {
  // Contact items array with updated email and phone
  const contactItems = [
    {
      key: 'phone',
      icon: Phone,
      label: 'Phone',
      value: data.phone,
      link: `tel:${data.phone.replace(/[^0-9+]/g, '')}`,
      ariaLabel: `Call us at ${data.phone}`,
    },
    {
      key: 'email',
      icon: Mail,
      label: 'Email',
      value: data.email,
      link: `mailto:${data.email}`,
      ariaLabel: `Email us at ${data.email}`,
    },
    {
      key: 'address',
      icon: MapPin,
      label: 'Address',
      value: data.address,
      link: null,
      ariaLabel: `Visit us at ${data.address}`,
    },
  ];

  return (
    <div className="bg-white py-6 sm:py-8 border-t border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.key}
                className="flex flex-col items-center pt-4 sm:pt-0 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ delay: index * 0.2, duration: 0.6, ease: 'easeOut' }}
              >
                <motion.div
                  className="mb-2"
                  initial={{ rotate: -10 }}
                  animate={{ rotate: 0 }}
                  whileHover={{ rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                </motion.div>
                <p className="text-base font-medium text-gray-500 mb-1">{item.label}</p>
                {item.link ? (
                  <a
                    href={item.link}
                    className="text-lg sm:text-xl font-semibold text-primary hover:text-blue-700 transition-colors"
                    aria-label={item.ariaLabel}
                  >
                    {item.value}
                  </a>
                ) : (
                  <p
                    className="text-lg sm:text-xl font-semibold text-gray-700"
                    aria-label={item.ariaLabel}
                  >
                    {item.value}
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// Updated contact data
export const exampleContactData = {
  phone: "+966 593534881",   // Updated phone
  email: "ramlimited.sa@gmail.com",    // Updated email
  address: "Riyadh, Saudi Arabia",
};

export default ContactInfoBar;
