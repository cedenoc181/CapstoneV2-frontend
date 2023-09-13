import {useState} from 'react'
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import Resizer from 'react-image-file-resizer';

function ProviderReviews({therapist, activeUser}) {
console.log(activeUser);
const [feedback, setFeedback] = useState({})
const [starRating, setStarRating] = useState(0)
const [pic, setPic] = useState('')
const [text, setText] = useState('')
const [newReview, setNewReview] = useState(therapist.reviews)

const [star1, setStar1] = useState(false)
const [star2, setStar2] = useState(false)
const [star3, setStar3] = useState(false)
const [star4, setStar4] = useState(false)
const [star5, setStar5] = useState(false)

// const [imageString, setImageString] = useState('');

// console.log(StarOutlineIcon);

function handleSubmit(e) {
  e.preventDefault();
  fetch(`http://localhost:9292/reviews`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      user_id: activeUser.id,
      physical_therapist_id: therapist.id,
      users_review: text,
      stars: starRating,
      photo: pic
  }),
  })
   .then(res => res.json())
   .then(data => {
      console.log(data)
      setNewReview([...newReview, data])
      setFeedback(data)
      setStarRating()
      setPic('')
      setText('')
      alert("Your Review has posted!")
   })
  }

console.log(feedback)
console.log(starRating)
console.log(pic)
console.log(text)


// creating on click function that highlights the stars rating 
function handleClick(starIndex) {
  console.log("click");

  const newStarStates = Array(5).fill(false);
  for (let i = 0; i < starIndex; i++) {
    newStarStates[i] = true;
  }
  setStar1(newStarStates[0]);
  setStar2(newStarStates[1]);
  setStar3(newStarStates[2]);
  setStar4(newStarStates[3]);
  setStar5(newStarStates[4]);
  setStarRating(starIndex);
}

const handleFileChange = (event) => {
  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {

      const blob = new Blob([e.target.result], { type: file.type });

      // Create a File object from the Blob
      const resizedFile = new File([blob], file.name, { type: file.type });

      // Resize the file and get the data URL
      Resizer.imageFileResizer(
        resizedFile,
        300, // maxWidth
        300, // maxHeight
        'JPEG', // compressFormat
        80, // quality
        0, // rotation
        (uri) => {
          setPic(uri); // Set the data URL as the state
        },
        'base64' // outputType
      );
    };
    reader.readAsArrayBuffer(file); // Read the file as a data URL
  }
};

  return (
    <div className="testDiv">

    <h1 className='testi'> Dr. {therapist.last_name} would love to hear feedback!</h1>
    <div className="box">
        <form onSubmit={handleSubmit}>
          <br/>
          <label className='Rlabel'>Star raiting:</label>
          <br/>
          {/* use material icon to replace the emojis withh clickable stars */}
          <div className="star-rating">
          {star1 ? (<span className="star1" onClick={() => handleClick(1)}>⭐</span>) : (<StarOutlineIcon fontSize="small" onClick={() => handleClick(1)}/>) }
          {star2 ? (<span className="star2" onClick={() => handleClick(2)}>⭐</span>) : (<StarOutlineIcon fontSize="small" onClick={() => handleClick(2)}/>) }
          {star3 ? (<span className="star3" onClick={() => handleClick(3)}>⭐</span>) : (<StarOutlineIcon fontSize="small" onClick={() => handleClick(3)}/>) }
          {star4 ? (<span className="star4" onClick={() => handleClick(4)}>⭐</span>) : (<StarOutlineIcon fontSize="small" onClick={() => handleClick(4)}/>) }
          {star5 ? (<span className="star5" onClick={() => handleClick(5)}>⭐</span>) : (<StarOutlineIcon fontSize="small" onClick={() => handleClick(5)}/>) }
          </div>

          {/* <input className='RcapInput' type="text" value={stars} onChange={(e) => setCaption(e.target.value)} placeholder="Review Caption"/> */}
          <br/>
          <label className='Rlabel'>Share a Photo:</label>
          <br/>
          <input className='RcapInput' type="file" onChange={handleFileChange} placeholder="Share a Photo"/>
          <br/>
          <label className='Rlabel'>Leave a Review:</label>
          <br/>
          <textarea className='RcapInput' type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Leave a Review"/>
          <br/>
          <input className='RcapSub' type="submit" value="Submit"/>
        </form>
        <h1 className='testimonies'>Testimonies</h1>
         {newReview.map((review)=> ( 
          <div className="testPost" key={review.id}>

            <h3 className="star-rating" ><span>{}</span>{"⭐".repeat(review.stars)}</h3>
            <p className="Rrev" >{review.users_review}</p>
          {/* <div>&nbsp;</div> */}
          <img  className="Rpic" src={review.photo} alt={review.user_id}/>
          </div>
          ))}
            </div>
           </div>
  )
}

export default ProviderReviews