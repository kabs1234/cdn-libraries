import type { Libraries, LibraryInfo } from '../types/types';

export const fetchLibraries = (): Promise<Libraries> =>
  fetch('https://api.cdnjs.com/libraries').then((res) => res.json());

export const fetchLibraryInfo = (libraryName: string): Promise<LibraryInfo> =>
  fetch(
    `https://api.cdnjs.com/libraries/${libraryName}?fields=name,latest,sri,authors,autoupdate,description,filename,homepage,keywords,license,repository,version,author`
  ).then((response) => response.json());

export const searchLibraries = (query: string): Promise<Libraries> =>
  fetch(`https://api.cdnjs.com/libraries?search=${query}`).then((response) =>
    response.json()
  );
