import { Route, Routes } from 'react-router';
import Index from './pages';

function App() {
  return (
    <Routes>
      <Route index element={<Index />} />
      <Route path={':library'} element={<Index />} />
    </Routes>
  );
}

export default App;
