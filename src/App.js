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

      <div className='intro-container'>
          <div style={{width: '406px', height:'300px', textAlign: 'center'}}>
          <img src={CSH_photo} style={{width: '406px', height:'300px'}} alt=''></img>
          <br></br><br></br><br></br>
          <FaGithub size={30}></FaGithub> | <FaLinkedin size={30}></FaLinkedin>
          <br></br>
          <CgMail size={30}></CgMail>
          </div>
          <div style={{color: 'grey'}}> 
            <h1 style={{fontFamily: 'Roboto', color:'white'}}>Hi, I'm Canvern.</h1>
            <br></br>
            <br></br>
            Aspiring Software Engineer & graduate from Durham University
            <br></br>
            <br></br>
            Experienced in software development with experience in Outlier
          </div>
      </div>

        <div>
          <h1 style={{fontFamily: 'Roboto', color:'white', display: 'flex', justifyContent: 'center', alignItems:'center'}}>Personal Summary</h1>
        </div>

      <div style={{color: 'grey', display: 'flex', justifyContent: 'center', alignItems:'center', marginLeft: '30%', marginRight: '30%'}} className='font1'>
        
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
        <h1 style={{fontFamily: 'Roboto', color:'white', display: 'flex', justifyContent: 'center', alignItems:'center'}}>Experience</h1>
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

      <div className='project-container'>
        <div style={{width: '500px'}}>
            <img src={maths_quiz} className='project-photo' alt=''></img>
        </div>
        <div className='project-text'>
          A full-stack maths quiz application. Frontend: React, Backend: Node.js and Express. Database: Postgresql. Link <a href="https://maths-quiz-nine.vercel.app">here</a>
        </div>
      </div>



      <div className='project-container'>
        <div style={{width: '500px'}}>
            <img src={Sentiment_keyword_analysis_model} className='project-photo2' alt=''></img>
        </div>
        <div className='project-text'>
            This project demonstrates a simple implementation of an AI incorporated into a webpage using an API link and backend routing. Link <a href="https://sentiment-and-keyword-analysis.vercel.app/">here</a>
        </div>
      </div>

      <div className='project-container'>
        <div style={{width: '500px'}}>
            <img src={personalised_ai} className='project-photo3' alt=''></img>
        </div>
        <div className='project-text'>
          Personalised AI by connecting to Google Gemini AI model. Link <a href="personalised-ai.vercel.app">here</a>
        </div>
      </div>
      <br></br><br></br><br></br><br></br><br></br>

      </div>

      <footer className='footer'>
        <h2>test</h2>
      </footer>

    </div>
  )
};

export default App;