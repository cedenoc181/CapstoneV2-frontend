import React from 'react'
import ExerciseCardGIF from './ExerciseCardGIF'
import ExerciseFavsGIF from './ExerciseFavsGIF'
import ExerciseSearchGIF from './ExerciseSearchGIF'

function ExerciseContainerGIF({activeUser, exercisesGIF, searchGIF}) {
  return (
    <div>
        <ExerciseSearchGIF searchGIF={searchGIF}/>
        <ExerciseFavsGIF activeUser={activeUser}/>
        {exercisesGIF.map((exercise) => (
           <ExerciseCardGIF key={exercise.id} exercise={exercise} activeUser={activeUser}/>
        ))}
    </div>
  )
}

export default ExerciseContainerGIF