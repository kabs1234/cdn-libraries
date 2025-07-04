import type { ReactElement } from 'react';
import type { Library } from '../types/types';
import { Link } from 'react-router';

export default function LibaryItem({
  library,
}: {
  library: Library;
}): ReactElement {
  return (
    <Link
      className="bg-gray-100 w-full h-48 rounded-md text-5xl text-center"
      to={`/libraries/${library.name}`}
    >
      {library.name}
    </Link>
  );
}
