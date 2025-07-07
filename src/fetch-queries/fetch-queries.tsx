import type { Libraries, LibraryInfo } from '../types/types';

export const fetchLibraries = async (): Promise<Libraries> => {
  const response = await fetch('https://api.cdnjs.com/libraries');

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};

export const fetchLibraryInfo = async (
  libraryName: string
): Promise<LibraryInfo> => {
  const response = await fetch(
    `https://api.cdnjs.com/libraries/${libraryName}?fields=name,latest,sri,authors,autoupdate,description,filename,homepage,keywords,license,repository,version,author`
  );

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};

export const searchLibraries = async (query: string): Promise<Libraries> => {
  const response = await fetch(
    `https://api.cdnjs.com/libraries?search=${query}`
  );

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};
