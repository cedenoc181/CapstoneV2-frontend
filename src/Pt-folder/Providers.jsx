import {useState, useEffect} from 'react'
import { RotatingSquare } from "react-loader-spinner";
import ProviderContainer from "./ProviderContainer"

function Providers({activeUser, therapist, searchPt}) {
  console.log(activeUser)
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
<ProviderContainer activeUser={activeUser} therapist={therapist} searchPt={searchPt}/>
            )
            }
    </div>
  )
}

export default Providers