import type { ReactElement } from 'react';

export default function ErrorComponent({
  title = 'Oops!',
  message = 'Something went wrong.',
  showBackButton = true,
}): ReactElement {
  return (
    <div className="flex items-center justify-center bg-gradient-to-br from-red-50 to-white p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden border border-red-100">
        <div className="p-8 text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-4">
            <svg
              className="h-8 w-8 text-red-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
          <p className="text-gray-600 mb-6">{message}</p>

          {showBackButton && (
            <button
              onClick={() => window.history.back()}
              className="px-6 py-2 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            >
              Go Back
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
