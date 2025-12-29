import React from "react";
import ChallengeSolutionCard from "./ChallengeSolutionCard";

// Minimal dummy data
const data = [
  { title: "Challenge 1", content: "This is the first challenge." },
  { title: "Solution 1", content: "This is the solution for challenge 1." },
  { title: "Challenge 2", content: "This is the second challenge." },
  { title: "Solution 2", content: "This is the solution for challenge 2." },
];

const ChallengeSolutionGrid = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center p-4">
      {data.map((item, index) => (
        <ChallengeSolutionCard
          key={index}
          title={item.title}
          content={item.content}
        />
      ))}
    </div>
  );
};

export default ChallengeSolutionGrid;
