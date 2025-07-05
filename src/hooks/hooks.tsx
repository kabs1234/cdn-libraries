import { useQuery } from '@tanstack/react-query';
import {
  fetchLibraryInfo,
  fetchLibraries,
  searchLibraries,
} from '../fetch-queries/fetch-queries';

export const useLibraries = () => {
  return useQuery({
    queryKey: ['librariesData'],
    queryFn: fetchLibraries,
  });
};

export const useLibraryInfo = (libraryName: string) => {
  return useQuery({
    queryKey: ['libraryInfo', libraryName],
    queryFn: () => fetchLibraryInfo(libraryName),
  });
};

export const useSearchedLibraries = (query: string) => {
  return useQuery({
    queryKey: ['searchLibraries', query],
    queryFn: () => searchLibraries(query),
  });
};
