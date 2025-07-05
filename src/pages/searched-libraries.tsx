import type { ReactElement } from 'react';
import LibrariesList from '../components/libraries-list';
import { useSearchedLibraries } from '../hooks/hooks';
import { useParams } from 'react-router';

export default function SearchedLibraries(): ReactElement {
  const { query } = useParams();
  const { isPending, error, data } = useSearchedLibraries(query as string);

  if (isPending) {
    return <p>Loading ...</p>;
  }

  if (error) {
    return <p>Error happened! Try to refresh the page</p>;
  }

  return (
    <>
      <p className="px-6 pt-3 text-2xl font-semibold tracking-wide transition-all duration-200 ">
        {`Search results on ${query}:`}
      </p>
      <LibrariesList libraries={data} />
    </>
  );
}
