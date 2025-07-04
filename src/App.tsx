import { Route, Routes } from 'react-router';
import Libraries from './pages/libraries';
import LibraryInfo from './components/library-full-info';
import ErrorPage from './pages/error';
import IndexPage from './pages';
import Layout from './components/layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/libraries" element={<Libraries />} />
        <Route path={'/libraries/:libraryName'} element={<LibraryInfo />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
