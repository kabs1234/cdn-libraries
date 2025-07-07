import type { ReactElement } from 'react';
import { useNavigate } from 'react-router';

export default function ErrorPage(): ReactElement {
  const navigate = useNavigate();

  const onGoBackButtonClick = (): void => {
    navigate(-1);
  };

  const onHomeButtonClick = (): void => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full md:max-w-lg lg:max-w-2xl bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden p-6 md:p-8 lg:p-10 text-center transition-all hover:shadow-2xl">
        <div className="flex flex-col items-center">
          <div className="relative mb-8">
            <div className="absolute -inset-4 bg-red-100 rounded-full blur opacity-75 animate-pulse"></div>
            <div className="relative bg-red-100 p-5 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 md:h-20 md:w-20 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3">
            404 - Page Not Found
          </h1>

          <p className="text-gray-600 mb-8 max-w-md">
            Oops! The page you're looking for doesn't exist or has been moved.
            Let's get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xs">
            <button
              onClick={onGoBackButtonClick}
              className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 shadow hover:shadow-md"
            >
              Previous Page
            </button>
            <button
              onClick={onHomeButtonClick}
              className="flex-1 px-6 py-3 bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 font-medium rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md"
            >
              Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
