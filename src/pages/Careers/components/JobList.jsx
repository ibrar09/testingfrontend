import React from "react";
import JobCard from "./JobCard";
import { useLanguage } from "../../../context/LanguageContext";

const JobList = ({ jobs }) => {
  const { lang } = useLanguage();

  // Bilingual title
  const title = lang === 'ar' ? "الوظائف الشاغرة" : "Open Positions";

  return (
    <section 
      className="py-20 px-6 bg-white"
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      <h2 className={`text-4xl font-bold text-center mb-10 ${lang === 'ar' ? 'font-arabic' : ''}`}>
        {title}
      </h2>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </section>
  );
};

export default JobList;