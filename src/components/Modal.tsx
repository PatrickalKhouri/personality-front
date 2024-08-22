import React from 'react';

interface ModalProps {
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl mb-4">Questions and Answers</h2>
        {/* Add your complex modal content here */}
        <p>Question 1: Answer 1</p>
        <p>Question 2: Answer 2</p>
        <p>Question 3: Answer 3</p>
        <p>Question 4: Answer 4</p>
        <p>Question 5: Answer 5</p>
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
