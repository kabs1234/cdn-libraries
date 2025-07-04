import type { ReactElement } from 'react';
import type { Library } from '../types/types';

export default function LibaryItem({
  library,
}: {
  library: Library;
}): ReactElement {
  return (
    <a
      className="bg-gray-100 w-full h-48 rounded-md text-5xl text-center"
      href="#"
    >
      {library.name}
    </a>
  );
}
