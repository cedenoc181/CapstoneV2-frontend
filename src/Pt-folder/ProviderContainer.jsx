import React from 'react'
import ProviderSearch from "./ProviderSearch.jsx"
import ProviderCard from "./ProviderCard.jsx"

function ProviderContainer({therapist, activeUser, searchPt}) {

console.log(activeUser)
console.log(therapist)

  return (
    <div>


<ProviderSearch searchPt={searchPt}/>


{therapist.map((pt) => (
    <ProviderCard key={pt.id} pt={pt} activeUser={activeUser}/>
))

}


    </div>
  )
}

export default ProviderContainer