import React from 'react';
import './App.css';
import Header from './layout/Header';
import HeroSection from './components/HeroSection';
import WorkManagementSection from './components/WorkManagementSection';
import Section from './components/Section';

import workTogetherImg from "../src/img/workTogether.svg"

function App() {
  return (
    <>
      <Header/>
      <HeroSection/>
      {/* <WorkManagementSection/> */}
      <Section 
        title='Project Management'
        paragraph='Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.'
        textBtn='Get Started'
        hasIcon={true}
        hasImg={false}
      >
      </Section>
      <Section
        title='Work together'
        paragraph='With whitepace, share your notes with your colleagues and collaborate on them.
You can also publish a note to the internet and share the URL with others.'
        textBtn='Try it now'
        hasIcon={true}
        hasImg={true}
      >
        <img src={workTogetherImg} alt="" width={279}/>
      </Section>

      <Section
        title='Use as Extension'
        paragraph='Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.'
        textBtn="let's Go"
        hasIcon={true}
        hasImg={false}
        bgDark={true}
      />

      <Section
        title='Custumise it to your needs'
        paragraph='Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.'
        textBtn="Let's Go"
        hasIcon={true}
        hasImg={false}
        bgDark={false}
        flexDirection='reverse'
      />

    </>
  );
}

export default App;
