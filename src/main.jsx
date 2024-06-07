import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/styles/index.css'
import Navbar from '../src/component/users/navbar';
import Hero from '../src/component/users/hero';
import OurService from './component/users/ourService';
import 'bootstrap/dist/css/bootstrap.min.css';
import WhyUs from './component/users/whyUs';
import Testimoni from './component/users/testimoni';
import CTA from './component/users/cta';
import Footer from './component/users/footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <OurService />
    <WhyUs />
    <Testimoni />
    <CTA />
    <Footer />
  </React.StrictMode>,
)
