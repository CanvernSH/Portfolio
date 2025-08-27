import React, { useEffect } from 'react';
import CSH_photo from './CSH_Graduation_picture.jpg';
import maths_quiz from './maths-quiz.png';
import Sentiment_keyword_analysis_model from './key_word_sentiment_analysis_model.png';
import personalised_ai from './personalised-ai.png';
import temp_image from './temp.png'

function App() {

  return (
    <div>

      <div className='intro-container'>
          <img src={CSH_photo} style={{width: '406px', height:'300px'}}></img>

          <div>
            Hi, I'm Canvern.
            <br></br>
            <br></br>
            Aspiring Software Engineer & graduate from Durham University
            <br></br>
            <br></br>
            Experienced in software development with experience in Outlier
          </div>
      </div>




      <div style={{color:'red', textAlign: 'center', marginTop: '100px'}}>
        <h1> Projects </h1>
      </div>

      <div className='project-container'>
        <div style={{width: '500px'}}>
            <img src={maths_quiz} className='project-photo'></img>
        </div>
        <div className='project-text'>
          A full-stack maths quiz application. Frontend: React, Backend: Node.js and Express. Database: Postgresql. Link <a href="https://maths-quiz-nine.vercel.app">here</a>
        </div>
      </div>



      <div className='project-container'>
        <div style={{width: '500px'}}>
            <img src={Sentiment_keyword_analysis_model} className='project-photo2'></img>
        </div>
        <div className='project-text'>
            This project demonstrates a simple implementation of an AI incorporated into a webpage using an API link and backend routing. Link <a href="https://sentiment-and-keyword-analysis.vercel.app/">here</a>
        </div>
      </div>

      <div className='project-container'>
        <div style={{width: '500px'}}>
            <img src={personalised_ai} className='project-photo3'></img>
        </div>
        <div className='project-text'>
          Personalised AI by connecting to Google Gemini AI model. Link <a href="personalised-ai.vercel.app">here</a>
        </div>
      </div>

      <div>
        <h1>
          Education
        </h1>
        BSc in Mathematics from Durham University - Grade: First Class Honours. <br></br> 
        Year 1: 80% Year 2: 76% Year 3: 71% <br></br>
        All modules 64%-91%. 18 modules 70%-91%. Project 73%: Uncertainity calibration for deep learning models

        <br></br> <br></br>

        Relevant modules: Linear Algebra (81%), Discrete maths (82%), Programming (85%), Machine Learning and Neural Networks (73%), Dynamics (91%)

        <br></br><br></br><br></br><br></br>

        I have also studied A Levels achieving A*A*A*A* in Computer Science, Maths, Further Maths and Physics. My GCSE Computer Science grade is 8
      </div>

    </div>
  );
}

export default App;