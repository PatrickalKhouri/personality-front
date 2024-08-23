import React, { useState } from 'react';
import Modal from './components/Modal'
import axios from 'axios';
import './App.css';

export interface Questions {
  id: Number;
  question: String;
  answers: Answers;
}

export interface Answers {
  id: Number;
  answer: String;
  score: Number;
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState<Boolean>(false);
  const [questions, setQuestions] = useState<Questions[]>([]);

  const url = 'http://localhost:4000'
  const backOfficeToken = process.env.REACT_APP_BACKOFFICE_KEY

  const openModal = async () => {
    const response = await axios.get(`${url}/questions/random`, { headers: {'backoffice_key' : backOfficeToken}})
    if (response.data) {
      setQuestions(response.data)
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setQuestions([])
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
      {isModalOpen && <Modal closeModal={closeModal} questions={questions}/>}
    </div>
  );
}

export default App;
