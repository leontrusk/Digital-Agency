import './App.css';
import {BrowserRouter, Routes} from "react-router-dom";
import Header from './Componentcs/Header/Header';
import About from './Componentcs/Main/About Us/About';
import Services from './Componentcs/Main/Services/Services';
import Subscribe from './Componentcs/Main/Subscribe/Subscribe';
import Process from './Componentcs/Main/Process/Process';
import Projects from './Componentcs/Main/Projects/Projects';
import Footer from './Componentcs/Footer/Footer';
import WhatSay from './Componentcs/Main/WhatSay/WhatSay';
import Contact from './Componentcs/Main/Contact/Contact';

function App() {
  return (
   <BrowserRouter>
    <Header/>
    <About/>
    <Services/>
    <Subscribe/>
    <Process/>
    <Projects/>
    <WhatSay/>
    <Contact/>
    <Footer/>
   </BrowserRouter>
  );
}

export default App;
