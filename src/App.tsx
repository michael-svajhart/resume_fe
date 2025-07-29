import './App.css'
import { useEffect, useState } from 'react';
import Padder from './layout/Padder';
import Splash from "./sections/Splash";
import Header from './layout/header';
import Footer from './layout/Footer';
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import ProjectApple from "./sections/ProjectApple";
//import Contact from "../components/resume/Contact";

 

function App() {
  const [headerHeight, setHeaderHeight] = useState<number>(0)


 useEffect(() => {
    const measureHeader = () => {
      let h = document.getElementById("header")?.offsetHeight;
      console.log(h)
      if(h){
        setHeaderHeight(h);
      }
    }
    
    measureHeader();
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
        <div id="projects">
            <ProjectApple/>
        </div>
      </main>
      <Footer/>
       <Padder height={headerHeight}/>
    </>
  )
}

export default App
