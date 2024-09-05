import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layouts/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Works } from './pages/Works';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Contact } from './pages/Contact';

export const App = () => {
  return (
    <Router>
      <Layout>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/works' element={<Works />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Layout>
    </Router>
  );
};
