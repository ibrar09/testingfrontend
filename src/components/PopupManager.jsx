import React, { useEffect, useState } from "react";

// Check if user closed popup recently
const hasClosedRecently = () => {
  const closedTime = localStorage.getItem("bottomPopupClosed");
  if (!closedTime) return false;
  const now = new Date().getTime();
  const closedDate = parseInt(closedTime, 10);
  return now - closedDate < 15 * 60 * 1000; // 15 minutes
};

const MaintenancePopup = () => {
  const popups = [
    {
      id: 1,
      title: "🛠️ Complete Fit-Out Services",
      message: "We handle interior fit-outs from design to execution!",
      link: "/services#fitout",
      type: "fitout",
    },
    {
      id: 2,
      title: "🎨 Painting & Finishing",
      message: "High-quality painting for residential & commercial projects.",
      link: "/services#painting",
      type: "painting",
    },
    {
      id: 3,
      title: "🔌 Electrical & Plumbing",
      message: "Expert installation, repair, and maintenance services.",
      link: "/services#electrical",
      type: "electrical",
    },
    {
      id: 4,
      title: "🛋️ Carpentry & Furniture Work",
      message: "Custom furniture, cabinets, and carpentry services done perfectly!",
      link: "/services#carpentry",
      type: "carpentry",
    },
    {
      id: 5,
      title: "🛒 Store & Tools",
      message: "Get all maintenance tools and products at discounted prices.",
      link: "/store",
      type: "store",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!hasClosedRecently()) setVisible(true);
  }, []);

  useEffect(() => {
    if (!visible) return;

    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % popups.length);
        setVisible(true);
      }, 700); // fade-out then next
    }, 10000); // 10 seconds per popup
    return () => clearTimeout(timer);
  }, [current, visible]);

  const handleClose = (e) => {
    e.stopPropagation();
    setVisible(false);
    localStorage.setItem("bottomPopupClosed", new Date().getTime());
  };

  const handleClick = (link) => {
    window.location.href = link;
  };

  const active = popups[current];
  if (!active) return null;

  // Render animated icons per service type
  const renderAnimation = () => {
    switch (active.type) {
      case "fitout":
        return <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-3xl animate-slideRightBounce">🏗️</span>;
      case "painting":
        return <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-3xl animate-floatTool">🎨</span>;
      case "electrical":
        return <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-3xl animate-spinSlow">💡</span>;
      case "carpentry":
        return <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-3xl animate-bounceSlow">🪚</span>;
      case "store":
        return <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-3xl animate-trolley">🛒</span>;
      default:
        return null;
    }
  };

  return (
    <section
      aria-label="Maintenance Service Popup"
      className={`fixed bottom-0 left-0 w-full flex justify-center z-50 transition-transform duration-700 ease-in-out ${visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
    >
      <article
        onClick={() => handleClick(active.link)}
        className="relative cursor-pointer bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400
          text-white px-4 sm:px-6 py-3 sm:py-4 rounded-t-2xl shadow-2xl flex flex-col sm:flex-row
          items-center sm:justify-between w-full max-w-5xl gap-3 sm:gap-0 overflow-hidden hover:scale-105 transform transition-all duration-500 ease-in-out"
      >
        {renderAnimation()}

        <div className="flex-1 z-10 text-center sm:text-left">
          <h3 className="font-bold text-lg sm:text-xl animate-fadeUp">{active.title}</h3>
          <p className="text-sm sm:text-base animate-fadeUp delay-100">{active.message}</p>
        </div>

        <button
          onClick={handleClose}
          className="text-white text-lg sm:text-xl hover:text-gray-200 ml-3 z-10"
          title="Close"
        >
          ✕
        </button>
      </article>
    </section>
  );
};

export default MaintenancePopup;
