import type { ReactElement } from 'react';
import LibrariesList from '../components/libraries-list';
import type { Libraries } from '../types/types';
import { useLibraries } from '../hooks/hooks';

export default function Libraries(): ReactElement {
  const { isPending, error, data } = useLibraries();

  if (isPending) {
    return <p>Loading ...</p>;
  }

  if (error) {
    return <p>Error happened! Try to refresh the page</p>;
  }

  return <LibrariesList libraries={data} />;
}
