import React from 'react'
import ExerciseContainerGIF from './ExerciseContainerGIF.jsx'


function Exercise({activeUser, exercisesGIF, searchGIF}) {

  console.log(activeUser)
  console.log(exercisesGIF)
  return (
    <div>

<ExerciseContainerGIF activeUser={activeUser} exercisesGIF={exercisesGIF} searchGIF={searchGIF}/>
    </div>
  )
}

export default Exercise