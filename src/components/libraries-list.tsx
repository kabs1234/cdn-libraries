import { useMemo, type ReactElement } from 'react';
import { Fragment } from 'react/jsx-runtime';
import LibaryItem from './library-item';
import { LIBRARIES_TO_SHOW_COUNT } from '../const';
import type { Libraries } from '../types/types';

export default function LibrariesList({
  libraries,
  currentPage,
}: {
  libraries: Libraries;
  currentPage: number;
}): ReactElement {
  const currentLibrariesData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * LIBRARIES_TO_SHOW_COUNT;
    const lastPageIndex = firstPageIndex + LIBRARIES_TO_SHOW_COUNT;
    return libraries.results.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, libraries.results]);

  return (
    <div className="w-full p-6 flex flex-col pb-0">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-5">
        {currentLibrariesData.map((library) => {
          return (
            <Fragment key={library.name}>
              <LibaryItem library={library} />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
