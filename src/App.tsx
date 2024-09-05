import { BrowserRouter as Router } from 'react-router-dom';
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
        <main>
        <section className='min-h-screen flex items-center justify-center' id='home'>
            <Home />
          </section>
          <section id='about' className='bg-customBlack2 py-14'>
            <About />
          </section>
          <section id='works'>
            <Works />
          </section>
          <section id='contact'>
            <Contact />
          </section>
        </main>
        <Footer />
      </Layout>
    </Router>
  );
};
