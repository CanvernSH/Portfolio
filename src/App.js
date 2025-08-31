//import React, { useEffect } from 'react';
import CSH_photo from './CSH_Graduation_picture.jpg';
import maths_quiz from './maths-quiz.png';
import Sentiment_keyword_analysis_model from './key_word_sentiment_analysis_model.png';
import personalised_ai from './personalised-ai.png';

import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import {FaGithub, FaLinkedin } from 'react-icons/fa';
import {CgMail} from 'react-icons/cg';

import DownloadIcon from './downloadicon.png'

import PythonImg from './python.png';
import CPlusPlus from './c++.png';
import JavaScript from './javascript.png';
import ReactImg from './react.png';
import RStudio from './rstudio.png';

import PyTorch from './pytorch.png';
import TensorFlow from './TensorFlow.png';
import Git from './git.png';
import Postgresql from './postgresql.png';

function App() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log("Particles container loaded:", container);
  };

  const options = useMemo(() => ({
    background: {
      color: { value: "#0f0f0f" },
    },
    fpsLimit: 60,
    fullScreen: { enable: true, zIndex: -1 },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        resize: true,
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
      },
    },
    particles: {
      number: { value: 50, density: { enable: true, area: 800 } },
      color: { value: "#db7705ff" },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: true },
      size: { value: { min: 1, max: 5 } },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        outModes: { default: "bounce" },
      },
    },
    detectRetina: true,
  }), []);

  return (
    <div>
      <Particles id="tsparticles" options={options} particlesLoaded={particlesLoaded} />
      
      <header className='border1' style={{color: 'black', position: 'sticky', top:'0', display: 'flex', height: '50px', justifyContent: 'center', alignItems: 'center'}}>
          <div style={{width: '100%'}}>+44 752329 7104 | canvernsh@gmail.com </div>
          <div style={{direction: 'rtl', marginRight: '20px', width: '100%'}}>
            Nav Bar
            <button style={{backgroundColor: 'red', marginRight: '20px', borderRadius: '20px', height:'35px', width: '135px'}}><img src={DownloadIcon} alt="" style={{height: '16px', width: '16px', alignItems: 'center', transform: 'translate(0px, 3px)'}}></img>Resume</button>
          </div>
      </header>


      <div className='intro-container'>
          <div style={{width: '406px', height:'300px', textAlign: 'center'}}>
            <img src={CSH_photo} style={{width: '406px', height:'300px'}} alt=''></img>
            <br></br><br></br><br></br>
            <a href="https://github.com/canvernsh"><FaGithub size={30}></FaGithub></a> | <a href="https://linkedin.com/in/canvernsh"><FaLinkedin size={30}></FaLinkedin></a>
            <br></br>
            <a href="mailto:canvernsh@gmail.com"><CgMail size={30}></CgMail></a>
          </div>
          <div style={{color: 'grey'}}> 
            <h1 style={{fontFamily: 'Roboto', color:'white'}}>Hi, I'm Canvern.</h1>
            <br></br>
            <br></br>
            Software Engineer & graduate from Durham University
            <br></br>
            <br></br>
            Experienced in software development with experience in Outlier
          </div>
      </div>

        <div>
          <h1 style={{fontFamily: 'Roboto', color:'white', display: 'flex', justifyContent: 'center', alignItems:'center'}}>Personal Summary</h1>
        </div>

      <div style={{color: 'grey', display: 'flex', justifyContent: 'center', alignItems:'center', width: '500px', margin: '0 auto'}} className='font1'>
        
        Recent graduate from Durham University with a strong foundation in software development, programming, and mathematics. I have hands-on experience building full-stack applications using Python,
        C++, and Next.js, alongside practical knowledge of AI and deep learning from academic and real-world
        projects. At Outlier.ai, I contributed to both AI model training and web development initiatives. I
        possess strong leadership skills developed through tutoring and have honed my communication abilities
        through group projects. Seeking a graduate role in software development in the UK starting in 2025.
      </div>

      <div style={{marginTop: '200px'}}>
        <h1 style={{fontFamily: 'Roboto', color:'white', display: 'flex', justifyContent: 'center', alignItems:'center'}}>Education</h1>
      </div>

      <div style={{color: 'white', textAlign: 'center'}}>

        <div className='backgroundcolor1'>
          <br></br>
          <h2 style={{color: 'white'}}>Durham University</h2>
          First Class Honours in BSc Mathematics
          <br></br> <br></br>
          Specialisation: Artifical Intelligence, Programming and Mathematical concepts
          <br></br>
          Key Modules (all programming-based): Programming, Machine Learning, Cryptography, Data Science, Modelling.
          <br></br>
          Project: Uncertainty Calibration for Deep Learning – Developed deep learning algorithms for image classification using Python and frameworks such as PyTorch, improving computer vision.
          <br></br><br></br>
          Took several programming modules and projects achieving 70%-91% in all of them.
          <br></br><br></br>
        </div>

        <br></br><br></br><br></br>

        <div className='backgroundcolor1'>
          <br></br>
          <h1>A Levels</h1>
          A*A*A*A* in Computer Science, Maths, Further Maths and Physics
          <br></br><br></br>
          Computer Science Included: OOP, Algorithms, Data Structures, Relational databases, Security
          <br></br><br></br>
        </div>

        <br></br><br></br><br></br>

        <div className='backgroundcolor1'>
          <br></br>
          <h1>GCSE</h1>
          8 GCSEs including Grade 8 in Computer Science and Grade 9 in Mathematics and Further Mathematics
          <br></br><br></br>
        </div>

      </div>


     <div style={{marginTop: '400px'}}>
        <h1 style={{fontFamily: 'Roboto', color:'white', display: 'flex', justifyContent: 'center', alignItems:'center'}}>Work Experience</h1>
      </div>

      <div style={{color: 'white', textAlign: 'center'}}>

        <div style={{display:'flex', alignItems: 'center', textAlign:'center', justifyContent:'center'}}>
          <div style={{marginRight: '100px'}}>
            <h1>Outlier AI</h1>
            Software Developer
          </div>
          <div>
            •Trained generative AI models across multiple internal projects, ensuring high data quality
            <br></br>
            • Built full-stack web applications with Next.js to optimize internal tools for AI model evaluation.
            <br></br>
            • Reviewed contributions, flagged quality issues, and attended webinars on Gen AI developments.
          </div>
        </div>
        
        <div style={{display:'flex', alignItems: 'center', textAlign:'center', justifyContent:'center'}}>
          <div style={{marginRight: '100px'}}>
            <h1>Tutoring</h1>
            Freelance
          </div>
          <div>
            •Provided Python and C++ tutoring with a focus on problem-solving and foundational skills
            <br></br>
            • Mentored GCSE and A-Level students, improving grades by 1-2 levels.
          </div>
        </div>






      </div>





      <div style={{color: 'white', marginTop: '400px'}}>

      <div style={{color:'red', textAlign: 'center', marginTop: '100px'}}>
        <h1> Projects </h1>
      </div>

      <br></br>

      <div style={{textAlign: 'center', margin: '0 auto', width: '600px', color: 'grey', fontSize: '20px'}} className='project-text'>
        The following projects are some of my latest projects that I have worked on. These have taught me a variety of programming skills and website application. I am constantly making new projects and learning more about computer engineering.
      </div>

      <br></br><br></br>

      <div className='project-container'>
        <div style={{width: '500px'}}>
            <a href="https://maths-quiz-nine.vercel.app" target="_blank"><img src={maths_quiz} className='project-photo' alt=''></img></a>
        </div>
        <div className='project-text'>
          A full-stack maths quiz application. Frontend: React, Backend: Node.js and Express. Database: Postgresql. Link <a href="https://maths-quiz-nine.vercel.app">here</a>
        </div>
      </div>



      <div className='project-container'>
        <div style={{width: '500px'}}>
            <a href="https://sentiment-and-keyword-analysis.vercel.app" target="_blank"><img src={Sentiment_keyword_analysis_model} className='project-photo2' alt=''></img></a>
        </div>
        <div className='project-text'>
            This project demonstrates a simple implementation of an AI incorporated into a webpage using an API link and backend routing. Link <a href="https://sentiment-and-keyword-analysis.vercel.app/">here</a>
        </div>
      </div>

      <div className='project-container'>
        <div style={{width: '500px'}}>
            <a href="https://personalised-ai.vercel.app" target="_blank"><img src={personalised_ai} className='project-photo3' alt=''></img></a>
        </div>
        <div className='project-text'>
          Personalised AI by connecting to Google Gemini AI model. Link <a href="personalised-ai.vercel.app">here</a>
        </div>
      </div>
      <br></br><br></br><br></br><br></br><br></br>

      </div>

      <div style={{color:'white', fontFamily: 'Roboto', textAlign: 'center', marginTop: '100px'}}>
        <h1>Achievements and Certificates</h1>
      </div>

      <br></br><br></br>

      <div style={{display: 'flex', margin: '0 auto', textAlign: 'center', alignItems: 'center', justifyContent: 'center', color: 'white'}}>

        <div className='certificate-container'>
          a
        </div>

        <div className='certificate-container'>
          a
        </div>

        <div className='certificate-container'>
          a
        </div>

      </div>


      <div style={{color:'white', fontFamily: 'Roboto', textAlign: 'center', marginTop: '200px'}}>
        <h1>Techincal Skills</h1>
      </div>

      <br></br> <br></br>

      <div style={{textAlign: 'center', margin: '0 auto', width: '700px', color: 'grey', fontSize: '20px'}} className='project-text'>
        Throughout my time in in my degree, experience and through self-study I have learnt a variety of programming languages and skills. These skills have been gained through many hours of practice, understanding and problem solving. I am constantly deepening my understanding in these languages, as well as remaining open to new languages and gaining transferrable skills 
        <br></br><br></br>



        <div style={{display: 'flex', justifyContent: 'center'}}>

          <div className='hex' style={{backgroundColor: 'purple'}}>
            <img src={PythonImg} style={{width: '60px', height: '60px'}} alt=''></img>
          </div>

          <div className='hex' style={{backgroundColor: 'purple'}}>
            <img src={CPlusPlus} style={{width: '60px', height: '60px'}} alt=''></img>
          </div>

          <div className='hex' style={{backgroundColor: 'purple'}}>
            <img src={JavaScript} style={{width: '60px', height: '60px'}} alt=''></img>
          </div>

          <div className='hex' style={{backgroundColor: 'purple'}}>
            <img src={ReactImg} style={{width: '60px', height: '60px'}} alt=''></img>
          </div>

          <div className='hex' style={{backgroundColor: 'purple'}}>
            <img src={RStudio} style={{width: '60px', height: '60px'}} alt=''></img>
          </div>

        </div>


        <div style={{display: 'flex', justifyContent: 'center'}}>

          <div className='hex' style={{backgroundColor: 'purple'}}>
            <img src={PyTorch} style={{width: '60px', height: '60px'}} alt=''></img>
          </div>

          <div className='hex' style={{backgroundColor: 'purple'}}>
            <img src={TensorFlow} style={{width: '60px', height: '60px'}} alt=''></img>
          </div>

          <div className='hex' style={{backgroundColor: 'purple'}}>
            <img src={Git} style={{width: '60px', height: '60px'}} alt=''></img>
          </div>

          <div className='hex' style={{backgroundColor: 'purple'}}>
            <img src={Postgresql} style={{width: '60px', height: '60px'}} alt=''></img>
          </div>

        </div>




      </div>

      <div style={{backgroundColor: 'white', width: '80%', height: '1px', margin: '0 auto', marginTop: '120px'}}>
      </div>


      <div style={{display: 'flex', justifyContent: 'center', marginTop: '140px'}}>
        <a href="mailto:canvernsh@gmail.com"><button style={{height: '100px', width: '300px', borderRadius: '35px', backgroundColor: 'blue', color: 'white', cursor: 'pointer'}}><h1>Contact Me</h1></button></a>
      </div>


      <footer style={{color: 'gray', textAlign: 'center', marginTop: '100px', fontFamily: 'sans-serif'}}>
        Canvern SH
      </footer>

    </div>
  )
};

export default App;