import React from 'react';
import './App.css';
import Header from './layout/Header';
import HeroSection from './components/HeroSection';
import WorkManagementSection from './components/WorkManagementSection';

function App() {
  return (
    <>
      <Header/>
      <HeroSection/>
      <WorkManagementSection/>
    </>
  );
}

export default App;
