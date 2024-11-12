"use client"
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Project';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

 function Home(){
  useEffect (() =>{
    AOS.init({
      duration: 1200,
      easing: "ease-out-back",
      delay: 100,
      mirror: true,                                                                                           
      anchorPlacement:"bottom-bottom",
      offset:160,
    });
    AOS.refresh();
  },[]);

  return(
    <main>
    <Navbar />
    <Hero />
    <About />
    <Projects/>
    <Skills/>
    <Contact />
    <Footer />
    
    </main>
  );

}
export default Home;