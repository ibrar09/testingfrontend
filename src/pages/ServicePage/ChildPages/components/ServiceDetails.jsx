// ServiceDetails.jsx
import React from "react";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const PRIMARY_BLUE = "#023A9A";

// --- Small Helper Component ---
const SpecItem = ({ text }) => (
  <motion.div
    className="flex items-start gap-2 py-1.5"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <span
      className={`w-2 h-2 rounded-full mt-2 flex-shrink-0`}
      style={{ backgroundColor: PRIMARY_BLUE }}
    ></span>
    <p className="text-gray-700 text-base leading-relaxed">{text}</p>
  </motion.div>
);

// --- Main Service Specs Section ---
const ServiceDetails = ({ header, scope, footer }) => {
  if (!scope || !scope.listA || !scope.listB) return null;

  const maxListLength = Math.max(scope.listA.length, scope.listB.length);
  const indices = Array.from({ length: maxListLength }, (_, i) => i);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-2"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {header.title}
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {header.subtitle}
        </motion.p>

        {/* Card Container */}
        <motion.div
          className="p-4 sm:p-8 lg:p-10 border border-gray-200 rounded-xl shadow-lg max-w-5xl mx-auto text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Scope of Work */}
          <div className="flex items-center gap-3 mb-6">
            <CheckCircle size={24} style={{ color: PRIMARY_BLUE }} />
            <h3 className="text-xl font-bold text-gray-900">{scope.title}</h3>
          </div>

          {/* Two-column Scope Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-1">
            {indices.map((index) => {
              const itemA = scope.listA[index];
              const itemB = scope.listB[index];

              return (
                <React.Fragment key={index}>
                  <div>{itemA && <SpecItem text={itemA} />}</div>
                  <div>{itemB && <SpecItem text={itemB} />}</div>
                </React.Fragment>
              );
            })}
          </div>

          {/* Footer / Additional Notes */}
          {footer && (
            <motion.div
              className="mt-10 pt-6 border-t border-gray-100"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-bold text-lg text-gray-900 mb-1">{footer.title}</h4>
                <p className="text-gray-600 text-sm">{footer.description}</p>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceDetails;
