import type { ReactElement } from 'react';
import Header from './header';
import { Outlet } from 'react-router';

export default function Layout(): ReactElement {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
