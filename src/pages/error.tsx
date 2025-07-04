import type { ReactElement } from 'react';
import { Link } from 'react-router';

export default function ErrorPage(): ReactElement {
  return (
    <>
      <Link to="..">
        <button type="button">Go Back</button>
      </Link>
      <div>Error happened! </div>
    </>
  );
}
