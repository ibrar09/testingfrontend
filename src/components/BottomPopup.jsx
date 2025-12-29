import React, { useEffect, useState } from "react";

const hasClosedRecently = () => {
  const closedTime = localStorage.getItem("bottomPopupClosed");
  if (!closedTime) return false;

  const now = new Date().getTime();
  const closedDate = parseInt(closedTime, 10);

  // 15 minutes = 15 * 60 * 1000 ms
  return now - closedDate < 15 * 60 * 1000;
};

const MaintenanceAnimatedPopup = () => {
  const popups = [
    {
      id: 1,
      title: "🔥 Big Sale!",
      message: "Up to 50% OFF on selected items!",
      link: "/store",
      type: "store",
    },
    {
      id: 2,
      title: "🎨 Projects",
      message: "Check our latest paint & maintenance projects!",
      link: "/projects",
      type: "projects",
    },
    {
      id: 3,
      title: "🛠️ Services",
      message: "Top-notch maintenance and repair services!",
      link: "/services",
      type: "services",
    },
    {
      id: 4,
      title: "🎁 Special Offers",
      message: "Limited-time offers available!",
      link: "/offers",
      type: "offers",
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
      }, 700);
    }, 10000);
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

  const renderAnimation = () => {
    switch (active.type) {
      case "store":
        return (
          <>
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 text-4xl animate-trolley">🛒</div>
            <div className="absolute left-10 top-0 w-2 h-2 rounded-full bg-yellow-300 animate-ping"></div>
            <div className="absolute left-20 top-2 w-2 h-2 rounded-full bg-yellow-300 animate-ping delay-200"></div>
          </>
        );
      case "projects":
        return (
          <>
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 text-4xl animate-slideRightBounce">🖌️</div>
            <div className="absolute left-1/3 top-1/2 text-xl animate-floatTool">🪛</div>
            <div className="absolute left-2/3 top-1/2 text-xl animate-floatTool delay-200">🔧</div>
          </>
        );
      case "services":
        return (
          <>
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl animate-spinSlow">🛠️</div>
            <div className="absolute left-1/3 top-1/2 text-xl animate-floatTool">🔨</div>
            <div className="absolute left-2/3 top-1/2 text-xl animate-floatTool delay-200">🔧</div>
          </>
        );
      case "offers":
        return (
          <>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 text-4xl animate-bounceSlow">🎁</div>
            <div className="absolute top-0 left-1/4 w-1 h-1 bg-yellow-200 rounded-full animate-confetti"></div>
            <div className="absolute top-0 left-1/3 w-1 h-1 bg-yellow-300 rounded-full animate-confetti delay-200"></div>
            <div className="absolute top-0 left-2/3 w-1 h-1 bg-orange-300 rounded-full animate-confetti delay-400"></div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`fixed bottom-0 left-0 w-full flex justify-center z-50 transition-transform duration-700 ease-in-out ${visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}>
      <div
        onClick={() => handleClick(active.link)}
        className="relative cursor-pointer bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-500
        text-white px-6 py-3 rounded-t-2xl shadow-2xl flex flex-col sm:flex-row
        items-center sm:justify-between w-full max-w-5xl gap-3 sm:gap-0 overflow-hidden hover:scale-105 transform transition-all duration-500 ease-in-out"
      >
        {renderAnimation()}
        <div className="flex-1 z-10 text-center sm:text-left">
          <h3 className="font-bold text-lg sm:text-xl animate-fadeUp">{active.title}</h3>
          <p className="text-sm sm:text-base animate-fadeUp delay-100">{active.message}</p>
        </div>
        <button onClick={handleClose} className="text-white text-lg hover:text-gray-200 ml-3 z-10" title="Close">✕</button>
      </div>
    </div>
  );
};

export default MaintenanceAnimatedPopup;
