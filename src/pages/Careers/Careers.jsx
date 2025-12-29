import React, { useEffect, useState } from "react";
import CareersHero from "./components/CareersHero";
import AboutWorkingWithUs from "./components/AboutWorkingWithUs";
import JobList from "./components/JobList";
import NoJobsMessage from "./components/NoJobsMessage";
import CVForm from "./components/CVForm";
import { careersData } from "./careersData";
import { useLanguage } from "../../context/LanguageContext";

const Careers = () => {
  const { lang } = useLanguage();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Get jobs data based on current language
    setTimeout(() => {
      // If careersData.jobs is bilingual, filter by language
      const jobsData = careersData.jobs;
      
      // Check if jobs data has language-specific structure
      const filteredJobs = jobsData.map(job => {
        // If job has language-specific properties, use them
        if (job.title && typeof job.title === 'object' && job.title[lang] !== undefined) {
          return {
            ...job,
            title: job.title[lang],
            description: job.description[lang],
            location: job.location[lang],
            type: job.type[lang]
          };
        }
        // Otherwise return job as-is
        return job;
      });
      
      setJobs(filteredJobs);
    }, 400);
  }, [lang]); // Re-run effect when language changes

  return (
    <div dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <CareersHero />
      <AboutWorkingWithUs />

      {jobs.length > 0 ? (
        <JobList jobs={jobs} />
      ) : (
        <NoJobsMessage />
      )}

      <CVForm />
    </div>
  );
};

export default Careers;