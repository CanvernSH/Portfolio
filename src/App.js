import React, { useEffect } from 'react';
import CSH_photo from './CSH_Graduation_picture.jpg';
import Sentiment_keyword_analysis_model from './key_word_sentiment_analysis_model.png';
import temp_image from './temp.png'

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = 'black';
  }, []);

  return (
    <div>
      <div style={{ backgroundColor: 'black'}} className='center-container'>
      </div>
      <div className='center-container'>
        <img src={CSH_photo} className='photo-size'></img>
      </div>
      <div style={{ color: 'white', textAlign: 'center', margin: 50}} className='center-container'>
        Hello. I am a mathematics graduate from Durham University seeking roles in Software Development. I have hands on experience in software engineering through Outlier as well as programming skills through self study.
      </div>

      <div className='center-container'>
        <h1> Projects </h1>
      </div>

      <div className='container'>
        <div className='left-box'>
            <img src={Sentiment_keyword_analysis_model} className='project-photo'></img>
        </div>
        <div className='right-box'>
            This project demonstrates a simple implementation of an AI incorporated into a webpage using an API link and backend routing. Link: <a href="https://sentiment-and-keyword-analysis.vercel.app/">here</a>
        </div>
      </div>

      <div className='container'>
        <div className='left-box'>
            <img src={temp_image} className='project-photo2' onClick={console.log('Test')}></img>
        </div>
        <div className='right-box'>
            This project demonstrates a simple implementation of an AI incorporated into a webpage using an API link and backend routing.
        </div>
      </div>

      <div className='container'>
        <div className='left-box'>
            <img src={temp_image} className='project-photo3' onClick={console.log('Test')}></img>
        </div>
        <div className='right-box'>
            This project demonstrates a simple implementation of an AI incorporated into a webpage using an API link and backend routing.
        </div>
      </div>

      <div className='center-container2'>
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