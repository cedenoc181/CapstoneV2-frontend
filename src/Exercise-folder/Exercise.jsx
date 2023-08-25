import {useState, useEffect} from 'react'
import ExerciseContainerGIF from './ExerciseContainerGIF.jsx'
import { RotatingSquare } from "react-loader-spinner";


function Exercise({activeUser, exercisesGIF, searchGIF}) {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Effect ran");
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 2300);
    }
  }, [loading]);

  console.log(activeUser)
  console.log(exercisesGIF)
  return (
    <div>
{
            loading ? (
            <RotatingSquare
            height="900"
            width="900"
            color="#1f456e"
            ariaLabel="rotating-square-loading"
            strokeWidth="1"
            wrapperStyle={{}}
            wrapperClass="loader"
            visible={true}
            />
            ) : (
<ExerciseContainerGIF activeUser={activeUser} exercisesGIF={exercisesGIF} searchGIF={searchGIF}/>
            )
            }
    </div>
  )
}

export default Exercise