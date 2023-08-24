import React, {useState} from 'react'

function ProviderSearch({searchPt}) {
    const [search, setSearch] = useState("");

    searchPt(search)

  return (
    <div className="localPtCon">
    <div className="localPt">
      <h3>Find the right Physical Therapist for you!</h3>
       </div>
    {/* <div>&nbsp;</div> */}
    <form className="localPtSearch">
    <input
      type="text"
      className="writing"
      placeholder="Search providers by ZipCode"
      value={search}
      onChange={(e) => {
        console.log(e.target.value);
        setSearch(e.target.value);
      }}
    />
  </form>

{/* <h3 className="localPt">Physical Therapist available for today: {today} </h3> */}
  </div>
  )
}

export default ProviderSearch