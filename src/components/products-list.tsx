import type { ReactElement } from 'react';
import Pagination from './pagination';
import Filter from './filter';

export default function ProductsList(): ReactElement {
  return (
    <div>
      <Filter />

      <div className="w-full p-6 flex flex-col">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-5">
          <div className="bg-gray-100 w-full h-48 rounded-md text-5xl text-center">
            React
          </div>
          <div className="bg-gray-100 w-full h-48 rounded-md text-5xl text-center">
            React-dom
          </div>
          <div className="bg-gray-100 w-full h-48 rounded-md text-5xl text-center"></div>
          <div className="bg-gray-100 w-full h-48 rounded-md text-5xl text-center"></div>
          <div className="bg-gray-100 w-full h-48 rounded-md text-5xl text-center"></div>
          <div className="bg-gray-100 w-full h-48 rounded-md text-5xl text-center"></div>
          <div className="bg-gray-100 w-full h-48 rounded-md text-5xl text-center"></div>
          <div className="bg-gray-100 w-full h-48 rounded-md text-5xl text-center"></div>
        </div>

        <Pagination />
      </div>
    </div>
  );
}
