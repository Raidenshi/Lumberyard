import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Main from './pages/Main';
import Cart from './pages/Cart';
import Catalog from './pages/Catalog';
import './styles/app.scss';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="catalog/*" element={<Catalog />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
