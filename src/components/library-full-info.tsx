import type { ReactElement } from 'react';
import { useParams } from 'react-router';
import type { LibraryInfo } from '../types/types';
import { useLibraryInfo } from '../hooks/hooks';

type LibraryParams = {
  libraryName: string;
};

export default function LibraryInfo(): ReactElement {
  const { libraryName } = useParams<LibraryParams>();
  const { isPending, error, data } = useLibraryInfo(libraryName as string);

  if (isPending) {
    return <p>Loading ...</p>;
  }

  if (error) {
    return <p>Error happened! Try to refresh the page</p>;
  }

  return (
    <div className="max-w-md mx-auto bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="p-8">
        <div className="flex items-center">
          <div className="bg-blue-100 p-3 rounded-lg">
            <svg
              className="w-10 h-10 text-blue-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
            </svg>
          </div>
          <div className="ml-4">
            <h1 className="text-2xl font-bold text-gray-800 capitalize">
              {data.name}
            </h1>
            <p className="text-blue-600 font-semibold">v{data.version}</p>
          </div>
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
                <span className="text-gray-700 font-medium">{data.author}</span>
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

        <div className="mt-8 flex justify-between">
          <a
            href={data.repository.url}
            className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
          <a
            href={data.latest}
            className="px-4 py-2 bg-blue-600 rounded-md text-sm font-medium text-white hover:bg-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download v{data.version}
          </a>
        </div>
      </div>
    </div>
  );
}
