import React from 'react'

const Quiz = () => {
  return (
    <>
    <div className='quiz-container'>
    <div className='quizing'>
      <h1>Exercises and Quizes</h1>
       <h2>Test your skills!</h2>
   </div>
<div className='exercise-containers'>
    <div className='exercise-boxes'>Exercise</div>
    <div className='exercise-boxes' id ='changing'>Quizzes</div>
</div>

   </div>
    </>
  );
}

export default Quiz;