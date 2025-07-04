import type { ReactElement } from 'react';
import { Link } from 'react-router';

export default function IndexPage(): ReactElement {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-24">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Explore JavaScript Libraries with{' '}
            <span className="text-indigo-600">CDNJS</span>
          </h1>
          <p className="mt-4 sm:mt-6 max-w-md sm:max-w-xl md:max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-600">
            A modern interface to browse, search, and analyze thousands of
            frontend libraries available on CDNJS. Perfect for developers
            looking to find the right tools for their projects.
          </p>
          <div className="mt-6 sm:mt-8 md:mt-10">
            <Link
              to="/libraries"
              className="inline-flex items-center px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Start Exploring
            </Link>
          </div>
        </div>
      </div>

      <div id="features" className="bg-white py-8 sm:py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center sm:lg:text-center">
            <h2 className="text-sm sm:text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Features
            </h2>
            <p className="mt-1 sm:mt-2 text-2xl sm:text-3xl leading-7 sm:leading-8 font-extrabold tracking-tight text-gray-900">
              What you can do with CDNJS Explorer
            </p>
          </div>

          <div className="mt-6 sm:mt-8 md:mt-10">
            <div className="space-y-6 sm:space-y-8 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-6 md:gap-y-8 lg:gap-x-8 lg:gap-y-10">
              <div className="relative">
                <div className="absolute flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-md bg-indigo-500 text-white">
                  <svg
                    className="h-5 w-5 sm:h-6 sm:w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </div>
                <p className="ml-12 sm:ml-14 md:ml-16 text-base sm:text-lg leading-5 sm:leading-6 font-medium text-gray-900">
                  Browse All Libraries
                </p>
                <p className="mt-1 sm:mt-2 ml-12 sm:ml-14 md:ml-16 text-sm sm:text-base text-gray-500">
                  Explore thousands of JavaScript libraries with pagination
                  support to easily navigate through the collection.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-md bg-indigo-500 text-white">
                  <svg
                    className="h-5 w-5 sm:h-6 sm:w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <p className="ml-12 sm:ml-14 md:ml-16 text-base sm:text-lg leading-5 sm:leading-6 font-medium text-gray-900">
                  Detailed Library Info
                </p>
                <p className="mt-1 sm:mt-2 ml-12 sm:ml-14 md:ml-16 text-sm sm:text-base text-gray-500">
                  Get comprehensive information about each library including
                  versions, files, and dependencies.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-md bg-indigo-500 text-white">
                  <svg
                    className="h-5 w-5 sm:h-6 sm:w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                </div>
                <p className="ml-12 sm:ml-14 md:ml-16 text-base sm:text-lg leading-5 sm:leading-6 font-medium text-gray-900">
                  Advanced Search
                </p>
                <p className="mt-1 sm:mt-2 ml-12 sm:ml-14 md:ml-16 text-sm sm:text-base text-gray-500">
                  Find exactly what you need with powerful search capabilities
                  and filtering options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-8 sm:py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center sm:lg:text-center">
            <h2 className="text-sm sm:text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Built With
            </h2>
            <p className="mt-1 sm:mt-2 text-2xl sm:text-3xl leading-7 sm:leading-8 font-extrabold tracking-tight text-gray-900">
              Modern Web Technologies
            </p>
          </div>

          <div className="mt-6 sm:mt-8 md:mt-10 grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 md:grid-cols-4">
            <div className="col-span-1 flex justify-center">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-white p-1 sm:p-2 rounded-md">
                  <img
                    className="h-8 sm:h-10 md:h-12"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    alt="React"
                  />
                </div>
                <div className="ml-2 sm:ml-3">
                  <p className="text-xs sm:text-sm font-medium text-gray-900">
                    React
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-1 flex justify-center">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-white p-1 sm:p-2 rounded-md">
                  <img
                    className="h-8 sm:h-10 md:h-12"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                    alt="TypeScript"
                  />
                </div>
                <div className="ml-2 sm:ml-3">
                  <p className="text-xs sm:text-sm font-medium text-gray-900">
                    TypeScript
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
