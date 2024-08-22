import React, { useState } from 'react';
import Modal from './components/Modal'
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <div className="text-center">
      <header className="bg-[#FEFEE3] min-h-screen flex flex-col items-center justify-center text-[#D68C45]">
        <h3 className="md:text-[100px] text-[40px]">
          Are you an introvert or an extrovert?
        </h3>
        <p>By Patrick Al Khouri</p>
        <button
          onClick={openModal}
          className="mt-6 px-8 py-4 bg-[#D68C45] text-[#FEFEE3] text-xl rounded">
          Start Test
        </button>
      </header>
      {isModalOpen && <Modal closeModal={closeModal} />}
    </div>
  );
}

export default App;
