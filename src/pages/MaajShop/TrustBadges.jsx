import React from "react";
import { ShieldCheck, Truck, CreditCard, Headphones } from "lucide-react";

const badges = [
  { icon: <Truck />, title: "Free Delivery", desc: "On orders over 100 SAR" },
  { icon: <ShieldCheck />, title: "Secure Payment", desc: "100% secure checkout" },
  { icon: <Headphones />, title: "24/7 Support", desc: "We’re here for you" },
  { icon: <CreditCard />, title: "Easy Returns", desc: "7-day return policy" },
];

const TrustBadges = () => (
  <section className="bg-gray-50 py-10 px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
    {badges.map((badge, i) => (
      <div key={i} className="flex flex-col items-center gap-2">
        <div className="p-3 bg-white rounded-full shadow-md text-blue-600">
          {badge.icon}
        </div>
        <h4 className="font-semibold text-gray-800">{badge.title}</h4>
        <p className="text-gray-500 text-sm">{badge.desc}</p>
      </div>
    ))}
  </section>
);

export default TrustBadges;
