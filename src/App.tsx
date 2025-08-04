import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { useEffect, useState, useRef } from 'react';
import Padder from './layout/Padder';
import Splash from "./sections/Splash";
import Header from './layout/Header';
import Footer from './layout/Footer';
import ProjectNav from './layout/ProjectNav';
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import ProjectApple from "./sections/ProjectApple";
import ProjectAPI from './sections/ProjectAPI';
//import Contact from "../components/resume/Contact";
 import ReactGA from "react-ga4";

function App() {
  
  const [headerHeight, setHeaderHeight] = useState<number>(0)
  
  const stickyRef = useRef<HTMLDivElement | null>(null);
  const [isSticky, setIsSticky] = useState<boolean>(false)


 useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: "/", title: "Home Page" });

    const measureHeader = () => {
      let h = document.getElementById("header")?.offsetHeight;
      console.log(h)
      if(h){
        setHeaderHeight(h);
      }
    }
    
    measureHeader();

    const handleScroll = () => {
        if (!stickyRef.current) return;
        const offsetTop = stickyRef.current.getBoundingClientRect().top;
        setIsSticky(offsetTop <= 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Header/>
      <main>
        <Splash/>
        <div className="main_container">
            <Education/>
            <Experience/>
            <Skills/>
        </div>
        <div id="projects" ref={stickyRef} className={isSticky ? "sticky" : ""}>
          <ProjectNav/>
          <div className="projects_container">
            <ProjectApple/>
            <ProjectAPI/>
          </div>
        </div>
      </main>
      <Footer/>
      <Padder height={headerHeight}/>
    </>
  )
}

export default App
