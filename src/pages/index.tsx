import type { ReactElement } from 'react';
import Header from '../components/header';
import LibrariesList from '../components/libraries-list';
import { useQuery } from '@tanstack/react-query';
import type { Libraries } from '../types/types';

export default function Index(): ReactElement {
  const fetchLibraries = (): Promise<Libraries> =>
    fetch('https://api.cdnjs.com/libraries').then((res) => res.json());

  const { isPending, error, data } = useQuery({
    queryKey: ['librariesData'],
    queryFn: fetchLibraries,
  });

  if (isPending) {
    return <p>Loading ...</p>;
  }

  if (error) {
    return <p>Error happened! Try to refresh the page</p>;
  }

  console.log(data);

  return (
    <>
      <Header />
      <LibrariesList libraries={data} />
    </>
  );
}
