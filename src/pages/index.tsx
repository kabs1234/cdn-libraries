import type { ReactElement } from 'react';
import Header from '../components/header';
import ProductsList from '../components/products-list';

export default function Index(): ReactElement {
  return (
    <>
      <Header />
      <ProductsList />
    </>
  );
}
