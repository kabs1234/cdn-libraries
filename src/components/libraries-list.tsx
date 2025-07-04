import { useState, type ReactElement } from 'react';
import Pagination from './pagination';
import Filter from './filter';
import type { Libraries } from '../types/types';
import { FIRST_SHOWN_LIBRARIES_COUNT } from '../const';
import LibaryItem from './library-item';

export default function LibrariesList({
  libraries,
}: {
  libraries: Libraries;
}): ReactElement {
  const [shownLibraries, setShownLibraries] = useState<number>(
    FIRST_SHOWN_LIBRARIES_COUNT
  );

  return (
    <div>
      <Filter />

      <div className="w-full p-6 flex flex-col">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-5">
          {libraries.results.slice(0, shownLibraries).map((library) => {
            return <LibaryItem library={library} />;
          })}
        </div>

        <Pagination />
      </div>
    </div>
  );
}
