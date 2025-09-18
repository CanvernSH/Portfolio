import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";


import CSH_photo from './img/CSH_Graduation_picture.jpg';
import maths_quiz from './img/maths-quiz2.png';
import Sentiment_keyword_analysis_model from './img/key_word_sentiment_analysis_model.png';
import personalised_ai from './img/personalised-ai.png';
import deep_learning_model from './img/deep-learning-model2.png';


import {FaGithub, FaLinkedin } from 'react-icons/fa';
import {CgMail} from 'react-icons/cg';

import DownloadIcon from './img/downloadicon.png'
import NavImg from './img/nav.png';

import PythonImg from './img/python.png';
import CPlusPlus from './img/c++.png';
import JavaScript from './img/javascript.png';
import ReactImg from './img/react.png';
import RStudio from './img/rstudio.png';

import PyTorch from './img/pytorch.png';
import TensorFlow from './img/TensorFlow.png';
import Git from './img/git.png';
import Postgresql from './img/postgresql.png';




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

  const [navPressed, setNavPressed] = useState(false);

  const handleNavButton = () => {
    setNavPressed(!navPressed);
  };



  return (
    <div>
      <Particles id="tsparticles" options={options} particlesLoaded={particlesLoaded} />
      
      <header className='header'>

        <div style={{width: '100%', marginLeft: '20px'}}>+44 7523 297104 | canvernsh@gmail.com </div>

        <div className="check-media">
          <a href="#">Home</a>
          <span style={{display: 'inline-block', width:'20px'}}></span>
          <a href="#aboutme">About me</a>
          <span style={{display: 'inline-block', width:'20px'}}></span>
          <a href="#projects">Projects</a>
          <span style={{display: 'inline-block', width:'20px'}}></span>
          <a href="#contact">Contact</a>
          <span style={{display: 'inline-block', width:'80px'}}></span>
          <a href="https://github.com/canvernsh"><FaGithub size={30}></FaGithub></a> 
          <span style={{display: 'inline-block', width:'20px'}}></span>
          <a href="https://linkedin.com/in/canvernsh"><FaLinkedin size={30}></FaLinkedin></a>
        </div>
        
        <div style={{direction: 'rtl', marginRight: '20px', width: '70%'}}>
          <button onClick={handleNavButton} className='nav-bar'> <img src={NavImg} style={{height: 'clamp(16px, 1.5vh, 32px)', width: 'clamp(16px, 1.5vh, 32px)'}} alt=""></img> </button>
          <a href="https://drive.google.com/uc?export=download&id=1F7iCHOBpShKDsp9QZZXH27FOd6psf-6h" download="CanvernSH.pdf"><button style={{backgroundColor: 'red', marginRight: '20px', borderRadius: '20px', height:'clamp(35px, 3.5vh, 60px)', width: 'clamp(135px, 8.5vh, 195px)', cursor: 'pointer', fontSize: 'clamp(1rem, 1.5vh, 2rem)'}}><img src={DownloadIcon} alt="" style={{height: 'clamp(16px, 1.5vh, 32px)', width: 'clamp(16px, 1.5vh, 32px)', alignItems: 'center', transform: 'translate(0px, 3px)'}}></img>Resume</button></a>
        </div>
      </header>

      {navPressed && <div className="nav-bar-loaded">
        <a href="#">Home</a>
        <br></br>
        <a href="#aboutme">About me</a>
        <br></br>
        <a href="#projects">Projects</a>
        <br></br>
        <a href="#contact">Contact</a>
        <br></br>
        <div style={{marginTop: '7px'}}>
        <a href="https://linkedin.com/in/canvernsh"><FaLinkedin size={30}></FaLinkedin></a>
        <span style={{display: 'inline-block', width: '2px'}}></span> | <span style={{display: 'inline-block', width: '2px'}}></span>
        <a href="mailto:canvernsh@gmail.com"><CgMail size={30}></CgMail></a>
        </div>
      </div>
      }



      <div style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'fit-content'}}>
        <div className='intro-container'>

          <div style={{textAlign: 'center'}}>
            <img src={CSH_photo} style={{width: '406px', height:'300px'}} alt=''></img>
            <br></br><br></br><br></br>
            <a href="https://github.com/canvernsh"><FaGithub size={30}></FaGithub></a> | <a href="https://linkedin.com/in/canvernsh"><FaLinkedin size={30}></FaLinkedin></a>
            <br></br>
            <a href="mailto:canvernsh@gmail.com"><CgMail size={30}></CgMail></a>
            <br></br><br></br><br></br><br></br>
          </div>

          <div style={{color: 'grey'}}> 
            <h1 style={{fontFamily: 'Roboto', color:'white'}}>Hi, I'm Canvern.</h1>
            <br></br>
            <br></br>
            Software Engineer & graduate from Durham University
            <br></br>
            <br></br>
            Proficient in software development with experience at Outlier
          </div>

        </div>
      </div>


      <div className="anchor" id="aboutme"></div>


      <div>
        <h1 className="section-title">Personal Summary</h1>
      </div>

      <div style={{color: 'grey', display: 'flex', justifyContent: 'center', alignItems:'center', width: '500px', margin: '0 auto', fontFamily: 'sans-serif', fontSize: 'medium', fontWeight: 'bolder', gap: '15%'}}>
        Recent graduate from Durham University with a strong foundation in software development, programming, and mathematics. I have hands-on experience building full-stack applications using Python,
        C++, and Next.js, alongside practical knowledge of AI and deep learning from academic and real-world
        projects. At Outlier.ai, I contributed to both AI model training and web development initiatives. I
        possess strong leadership skills developed through tutoring and have honed my communication abilities
        through group projects. Seeking a graduate role in software development in the UK starting in 2025.
      </div>


      <div style={{marginTop: '200px'}}>
        <h1 className="section-title">Education</h1>
      </div>

      <div style={{color: 'white', textAlign: 'center'}}>

        <div className='education-section'>
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

        <div className='education-section'>
          <br></br>
          <h1>A Levels</h1>
          A*A*A*A* in Computer Science, Maths, Further Maths and Physics
          <br></br><br></br>
          Computer Science Included: OOP, Algorithms, Data Structures, Relational databases, Security
          <br></br><br></br>
        </div>

        <br></br><br></br><br></br>

        <div className='education-section'>
          <br></br>
          <h1>GCSE</h1>
          8 GCSEs including Grade 8 in Computer Science and Grade 9 in Mathematics and Further Mathematics
          <br></br><br></br>
        </div>

      </div>




     <div style={{marginTop: '400px'}}>
        <h1 className="section-title">Work Experience</h1>
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
      
        <div className="anchor" id="projects"></div>

        <div style={{color:'red', textAlign: 'center', marginTop: '100px'}}>
          <h1> Projects </h1>
        </div>

        <br></br>

        <div style={{textAlign: 'center', margin: '0 auto', width: '600px', color: 'grey', fontSize: '20px'}}>
          The following projects are some of my latest projects that I have worked on. These have taught me a variety of programming skills and website applications. I am constantly making new projects and learning more about computer engineering.
        </div>

        <br></br><br></br>

        <div className='project-container'>
          <div style={{width: '500px'}}>
            <a href="https://maths-quiz.canvern.com" target="_blank"><img src={maths_quiz} className='project-photo' alt=''></img></a>
          </div>
          <div className='project-text'>
            A full-stack maths quiz application. Frontend: React, Backend: Node.js and Express. Database: Postgresql. Link <a href="https://maths-quiz.canvern.com">here</a>
          </div>
        </div>

        <div className='project-container'>
          <div style={{width: '500px'}}>
            <a href="https://www.kaggle.com/code/canvernsh/final-vgg-16-normalised-da/notebook" target="_blank"><img src={deep_learning_model} className='project-photo3' alt=''></img></a>
          </div>
          <div className='project-text'>
            This project involves programming neural networks using Python and the framework TensorFlow. Project <a href="https://drive.google.com/file/d/1cR64JfxLXH2VTI7OlcOhzVw-PZ6Uy5mv/view?usp=sharing">here</a>. Link <a href="https://www.kaggle.com/code/canvernsh/final-vgg-16-normalised-da/notebook">here</a>
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
        <br></br><br></br><br></br><br></br><br></br>

      </div>






      <div style={{color:'white', fontFamily: 'Roboto', textAlign: 'center', marginTop: '100px'}}>
        <h1>Achievements and Certificates</h1>
      </div>

      <br></br><br></br>

      <div style={{display: 'flex', margin: '0 auto', textAlign: 'center', alignItems: 'center', justifyContent: 'center', color: 'white'}}>

        <div className='certificate-container'>
          UKMT Olympiad <br></br><br></br> Best in School award (x2), Gold certificates (×4) and National Qualification
        </div>

        <div className='certificate-container'>
          Hackthon <br></br><br></br> Experienced Programming in Team Environments
        </div>

        <div className='certificate-container'>
          Subject Prize <br></br><br></br> Recognised for consistently exceptional academic performance
        </div>

      </div>


      <div style={{color:'white', fontFamily: 'Roboto', textAlign: 'center', marginTop: '200px'}}>
        <h1>Techincal Skills</h1>
      </div>

      <br></br> <br></br>

      <div style={{textAlign: 'center', margin: '0 auto', width: '700px', color: 'grey', fontSize: '20px'}}>
        Throughout my time in my degree, experience, and through self-study, I have learnt a variety of programming languages and skills. 
        These skills have been gained through many hours of practice, understanding and problem solving. 
        I am constantly deepening my understanding of these languages, as well as remaining open to new languages and gaining transferable skills.
        <br></br><br></br>

        <div style={{display: 'flex', justifyContent: 'center'}}>

          <div className='hex'>
            <img src={PythonImg} style={{width: '60px', height: '60px'}} alt=''></img>
          </div>

          <div className='hex'>
            <img src={CPlusPlus} style={{width: '60px', height: '60px'}} alt=''></img>
          </div>

          <div className='hex'>
            <img src={JavaScript} style={{width: '60px', height: '60px'}} alt=''></img>
          </div>

          <div className='hex'>
            <img src={ReactImg} style={{width: '60px', height: '60px'}} alt=''></img>
          </div>

          <div className='hex'>
            <img src={RStudio} style={{width: '60px', height: '60px'}} alt=''></img>
          </div>

        </div>


        <div style={{display: 'flex', justifyContent: 'center'}}>

          <div className='hex'>
            <img src={PyTorch} style={{width: '60px', height: '60px'}} alt=''></img>
          </div>

          <div className='hex'>
            <img src={TensorFlow} style={{width: '60px', height: '60px'}} alt=''></img>
          </div>

          <div className='hex'>
            <img src={Git} style={{width: '60px', height: '60px'}} alt=''></img>
          </div>

          <div className='hex'>
            <img src={Postgresql} style={{width: '60px', height: '60px'}} alt=''></img>
          </div>

        </div>

      </div>


      <div style={{backgroundColor: 'white', width: '80%', height: '1px', margin: '0 auto', marginTop: '120px'}}></div>


      <div id="contact" style={{display: 'flex', justifyContent: 'center', marginTop: '140px'}}>
        <a href="mailto:canvernsh@gmail.com"><button style={{height: '100px', width: '300px', borderRadius: '35px', backgroundColor: 'blue', color: 'white', cursor: 'pointer'}}><h1>Contact Me</h1></button></a>
      </div>


      <footer style={{color: 'gray', textAlign: 'center', marginTop: '100px', fontFamily: 'sans-serif'}}>
        Canvern SH
      </footer>

    </div>
  )
};

export default App;