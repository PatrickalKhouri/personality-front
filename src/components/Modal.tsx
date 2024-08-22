import React from 'react';
import { Questions } from '../App'

interface ModalProps {
  closeModal: () => void;
  questions: Questions[]
}

const Modal: React.FC<ModalProps> = ({ closeModal, questions }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-[#FEFEE3] p-6 rounded-lg shadow-lg w-full max-w-md md:max-w-2xl">
        <h2 className="text-2xl mb-4">Questions and Answers</h2>
        {/* Add your complex modal content here */}
        <p>Answers</p>
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
