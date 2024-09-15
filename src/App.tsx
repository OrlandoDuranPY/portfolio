import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from './components/Layouts/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Works } from './pages/Works';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Contact } from './pages/Contact';
import { Experience } from './pages/Experience';
import './App.css';
import { Techs } from './pages/Techs';

export const App = () => {
  return (
    <Router>
      <Layout>
        <Header />
        <main className='font-jost'>
          <section
            className='min-h-screen flex items-center justify-center'
            id='home'
          >
            <Home />
          </section>
          <section id='about' className='bg-customBlack2 py-20 mb-20 lg:mb-40'>
            <About />
          </section>
          <section id='experience' className='mb-40'>
            <Experience />
          </section>
          <section id='works'>
            <Works />
          </section>
          <section id='techs' className='py-10 mb-20 lg:mb-40'>
            <Techs />
          </section>
          <section id='contact' className='bg-customBlack2 lg:bg-transparent mb-20'>
            <Contact />
          </section>
        </main>
        <Footer />
      </Layout>
    </Router>
  );
};
