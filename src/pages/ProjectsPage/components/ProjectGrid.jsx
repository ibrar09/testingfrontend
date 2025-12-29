// ProjectGrid.jsx
import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const ProjectGrid = ({ projects, LinkComponent }) => {
  if (!projects || projects.length < 1) {
    console.warn("[ProjectGrid] No projects found!");
    return (
      <div className="text-center py-10 text-gray-500" role="status">
        No projects found.
      </div>
    );
  }

  const firstRowProjects = projects.slice(0, 2);
  const secondRowProjects = projects.slice(2, 5);
  const remainingProjects = projects.slice(5);

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {firstRowProjects.map((project, index) => (
          <motion.div
            key={project.id}
            className={index === 0 ? "md:col-span-2" : "md:col-span-1"}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectCard
              project={project}
              large={index === 0}
              LinkComponent={LinkComponent}
            />
          </motion.div>
        ))}
        {firstRowProjects.length === 1 && <div className="hidden md:block md:col-span-1"></div>}
      </div>

      {secondRowProjects.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {secondRowProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} LinkComponent={LinkComponent} />
            </motion.div>
          ))}
        </div>
      )}

      {remainingProjects.length > 0 && (
        <div>
          <h2 className="text-xl font-bold mt-12 mb-4 text-gray-800">
            Other Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {remainingProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <ProjectCard project={project} LinkComponent={LinkComponent} />
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default React.memo(ProjectGrid);
