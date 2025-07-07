import type { ReactElement } from 'react';

export default function Loading(): ReactElement {
  return (
    <div className="mt-4 flex justify-center items-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
    </div>
  );
}
