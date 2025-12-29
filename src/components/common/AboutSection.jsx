import React from "react";

const AboutSection = ({
  reverse = false,
  image,
  title,
  highlight,
  description,
  stats = [],
  badge,
  button,
}) => {
  return (
    <section className="max-w-[1440px] mx-auto px-6 bg-gray-50">
      <div className="py-16">
        <div
          className={`grid lg:grid-cols-2 gap-12 items-center ${
            reverse ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Image Side */}
          <div className="relative order-1 lg:order-none">
            <img
              src={image}
              alt={title}
              className="w-full h-auto rounded-2xl shadow-lg"
            />
            {/* Floating Badge */}
            {badge && (
              <div className="absolute -bottom-8 left-8 bg-primary text-white rounded-xl px-4 py-3 shadow-xl text-center">
                <h2 className="text-2xl font-bold">{badge.value}</h2>
                <p className="text-sm">{badge.label}</p>
              </div>
            )}
          </div>

          {/* Text Side */}
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              {title} <span className="text-primary">{highlight}</span>
            </h1>
            <p className="mt-6 text-gray-600 text-base leading-relaxed">
              {description}
            </p>

            {/* Stats */}
            {stats.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-8">
                {stats.map((item, index) => (
                  <div key={index}>
                    <h2 className="text-3xl font-bold text-primary">{item.value}</h2>
                    <p className="text-gray-700">{item.label}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Optional Button */}
            {button && (
              <div className="mt-6">
                <a
                  href={button.link}
                  className="inline-block bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-primary/90 transition"
                >
                  {button.label}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
