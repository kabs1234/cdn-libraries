import type { ReactElement } from 'react';
import type { Library } from '../types/types';
import { Link } from 'react-router';

export default function LibraryItem({
  library,
}: {
  library: Library;
}): ReactElement {
  return (
    <Link
      className="group w-full rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-sm hover:shadow-md transition-all duration-300 ease-in-out overflow-hidden border border-gray-200 hover:border-indigo-200 flex flex-col items-center justify-between p-6 h-48 text-center hover:scale-[1.02]"
      to={`/libraries/${library.name}`}
    >
      <div className="text-4xl font-bold text-indigo-600 mb-2 transition-colors duration-300 group-hover:text-indigo-800">
        {library.name}
      </div>

      <div className="mt-auto">
        <span className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-700 text-sm font-medium rounded-full transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white">
          Read details
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
}
