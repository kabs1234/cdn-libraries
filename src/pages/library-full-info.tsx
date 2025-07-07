import type { ReactElement } from 'react';
import { useNavigate, useParams } from 'react-router';
import type { LibraryInfo } from '../types/types';
import { useLibraryInfo } from '../hooks/hooks';

type LibraryParams = {
  libraryName: string;
};

export default function LibraryInfo(): ReactElement {
  const navigate = useNavigate();
  const { libraryName } = useParams<LibraryParams>();
  const { isPending, error, data } = useLibraryInfo(libraryName as string);

  const onGoBackButtonClick = (): void => {
    navigate(-1);
  };

  if (isPending) {
    return <p>Loading ...</p>;
  }

  if (error) {
    return <p>Error happened! Try to refresh the page</p>;
  }

  return (
    <div className="px-4">
      <div className="max-w-md mx-auto bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <div className="p-8">
          <div className="flex justify-end mb-6">
            <button
              type="button"
              className="flex items-center space-x-1 px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition-colors duration-200"
              onClick={onGoBackButtonClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Go Back</span>
            </button>
          </div>

          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800 capitalize">
              {data.name}
            </h1>
            <p className="text-blue-600 font-semibold">v{data.version}</p>
          </div>

          <div className="mt-6">
            <p className="text-gray-600">{data.description}</p>

            <div className="mt-4">
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                Details
              </h2>
              <div className="mt-2 space-y-2">
                <div className="flex">
                  <span className="text-gray-500 w-24">License:</span>
                  <span className="text-gray-700 font-medium">
                    {data.license}
                  </span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 w-24">Author:</span>
                  <span className="text-gray-700 font-medium">
                    {data.author}
                  </span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 w-24">Repository:</span>
                  <a
                    href={data.repository.url}
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
                <div className="flex">
                  <span className="text-gray-500 w-24">Homepage:</span>
                  <a
                    href={data.homepage}
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {data.homepage}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                CDN Link
              </h2>
              <div className="mt-2 bg-gray-100 p-3 rounded-lg overflow-x-auto">
                <code className="text-sm text-gray-800 break-all">
                  {data.latest}
                </code>
              </div>
              <div className="mt-2">
                <span className="text-xs text-gray-500">SRI Hash:</span>
                <code className="text-xs text-gray-700 ml-2">{data.sri}</code>
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                Keywords
              </h2>
              <div className="mt-2 flex flex-wrap gap-2">
                {data.keywords.map((keyword, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row sm:justify-between gap-4">
            <a
              href={data.repository.url}
              className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
            <a
              href={data.latest}
              className="px-4 py-2 bg-blue-600 rounded-md text-sm font-medium text-white hover:bg-blue-700 text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download v{data.version}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
