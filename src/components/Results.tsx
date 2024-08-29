import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface ResultProps {
  score: number;
  closeModal: () => void;
}

interface ResultResponse {
  maxScore: number;
  title: string;
  description: string;
}

const Results: React.FC<ResultProps> = ({ score, closeModal }) => {
  const [result, setResult] = useState<ResultResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchResult = async () => {
      try {
        const url = 'http://localhost:4000';
        const backOfficeToken = process.env.REACT_APP_BACKOFFICE_KEY;
        const response = await axios.get<ResultResponse>(
          `${url}/results/score/${score}`, 
          { headers: { 'backoffice_key': backOfficeToken } }
        );
        setResult(response.data);
      } catch (err) {
        setError('Failed to fetch results. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchResult();
  }, [score]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-[#FEFEE3] p-6 rounded-lg shadow-lg w-full max-w-md md:max-w-2xl">
        {result && (
          <>
            <h1 className="text-3xl font-bold mb-4">{result.title}</h1>
            <p className="whitespace-pre-line">{result.description}</p>
          </>
        )}
        <div className="flex justify-center mt-6">
          <button 
            onClick={closeModal} 
            className="px-4 py-2 bg-[#D68C45] text-[#FEFEE3] rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Results;
