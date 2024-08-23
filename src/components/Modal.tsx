import React, { useState } from 'react';
import { Questions } from '../App'

interface ModalProps {
  closeModal: () => void;
  questions: Questions[]
}

const Modal: React.FC<ModalProps> = ({ closeModal, questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});

  const handleAnswerSelect = (questionId: number, answerId: number) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionId]: answerId,
    }));

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      console.log('Quiz completed with answers:', answers);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-[#FEFEE3] p-6 rounded-lg shadow-lg w-full max-w-md md:max-w-2xl">
        <h2 className="text-2xl mb-4">{currentQuestion.question}</h2>
        <div>
          {currentQuestion.answers.map((answer: any) => (
            <button
              key={answer.id}
              onClick={() => handleAnswerSelect(currentQuestion.id, answer.id)}
              className="block w-full text-left mb-2 px-4 py-2 bg-[#D68C45] text-[#FEFEE3] rounded"
            >
              {answer.answer}
            </button>
          ))}
        </div>
        <button 
          onClick={closeModal} 
          className="mt-4 px-4 py-2 bg-[#D68C45] text-[#FEFEE3] rounded">
          Close Modal
        </button>
      </div>
    </div>
  );
};

export default Modal;
