import type { ReactElement } from 'react';
import { useNavigate } from 'react-router';

export default function ErrorPage(): ReactElement {
  const navigate = useNavigate();

  const onGoBackButtonClick = (): void => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full md:max-w-lg lg:max-w-2xl bg-white rounded-xl shadow-lg overflow-hidden p-6 md:p-8 lg:p-10 text-center">
        <div className="text-left mb-6">
          <button
            type="button"
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
            onClick={onGoBackButtonClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Go Back
          </button>
        </div>

        <div className="flex justify-center mb-6">
          <div className="bg-red-100 p-4 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>

        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3">
          Oops! Something went wrong
        </h1>

        <p className="text-gray-600 mb-6 md:mb-8 lg:mb-10 text-sm md:text-base lg:text-lg">
          We're sorry, but an unexpected error has occurred. Please try again
          later or return to the homepage.
        </p>
      </div>
    </div>
  );
}
