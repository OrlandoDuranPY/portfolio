import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layouts/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Works } from './pages/Works';

export const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path='/works' element={<Works/>} />
        </Routes>
      </Layout>
    </Router>
  );
};