import React, { useState } from 'react';
import { Questions } from '../App';

interface ModalProps {
  closeModal: () => void;
  questions: Questions[];
}

const Modal: React.FC<ModalProps> = ({ closeModal, questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [totalScore, setTotalScore] = useState<number>(0);
  const [fade, setFade] = useState<string>('fade-in');

  const handleAnswerSelect = (questionId: number, answerId: number, answerScore: number) => {
    setFade('fade-out');
    setTimeout(() => {
      setAnswers(prevAnswers => ({
        ...prevAnswers,
        [questionId]: answerId,
      }));
      setTotalScore(totalScore + answerScore);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setFade('fade-in');
    }, 500);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-[#FEFEE3] p-6 rounded-lg shadow-lg w-full max-w-md md:max-w-2xl">
        <div className={`transition-opacity duration-500 ${fade}`}>
          {currentQuestionIndex === questions.length && (
            <div>
              Quiz encerrado, sua nota: {totalScore}
            </div>
          )}
          {currentQuestionIndex < questions.length && (
            <div>
              <h2 className="text-2xl mb-4">
                {currentQuestionIndex + 1}. {currentQuestion.question}
              </h2>
              <div>
            {currentQuestion.answers.map((answer: any) => (
              <button
                key={answer.id}
                onClick={() => handleAnswerSelect(currentQuestion.id, answer.id, answer.score)}
                className="block w-full text-left mb-2 px-4 py-2 bg-[#D68C45] text-[#FEFEE3] rounded hover:bg-[#E29C5A]"
              >
                {answer.answer}
              </button>
                ))}
              </div>
            </div>
          )}
        </div>
        <button 
          onClick={closeModal} 
          className="mt-4 px-4 py-2 bg-[#D68C45] text-[#FEFEE3] rounded">
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
