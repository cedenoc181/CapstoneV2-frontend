import React, {useState} from 'react'

function ExerciseSearchGIF({searchGIF}) {
    const [search, setSearch] = useState("");

            searchGIF(search)

  return (
    <div>
              
<h1 className="exercise-title">Exercises glossary</h1>
      <div className="search-container">

      <form>
        <input
        className="search-bar"
          type="text"
          placeholder="search exercises by name, equipment, target, etc"
          value={search}
          onChange={(e) => {
            console.log(e.target.value);
            setSearch(e.target.value);
          }}
           />
      </form>
      </div>
    </div>
  )
}

export default ExerciseSearchGIF