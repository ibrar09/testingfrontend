import React, { useState } from 'react';
import { Outlet } from 'react-router-dom'; // 👈 import this
import Header from './Header';
import Footer from './Footer';
import RequestQuoteForm from '../../pages/RequestPage/RequestQuoteForm'; // adjust path if needed
import BottomPopup from '../BottomPopup';

const MainLayout = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const openQuoteModal = () => setIsQuoteOpen(true);
  const closeQuoteModal = () => setIsQuoteOpen(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header onQuoteClick={openQuoteModal} />

      {/* 👇 This is where all routed pages will appear */}
      <main className="flex-grow">
        <Outlet />
      </main>
       <BottomPopup />
      {/* Footer */}
      <Footer />

      {/* Quote modal */}
      {isQuoteOpen && <RequestQuoteForm onClose={closeQuoteModal} />}
    </div>
  );
};

export default MainLayout;