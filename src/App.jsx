import React from 'react';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Footer from './components/Footer';
import Form from './components/Form/Form';

function App() {
  return (
    <>
      <div className="w-full h-full">
        <div
          className="max-w-[1400px] m-auto p-4 h-h-full 
        "
        >
          <Header />
          <MainSection />
          <Form />
          <Footer content="Copyright &copy; 2024 Italents" />
        </div>
      </div>
    </>
  );
}

export default App;
