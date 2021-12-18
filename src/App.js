import './App.scss';
import HomePage from './pages/home';
import NotFoundPage from './pages/not-found';
import { Routes, Route } from 'react-router-dom';
import ShopPage from './pages/shop';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='*' element={<NotFoundPage />} />
        <Route path='/shop' element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
