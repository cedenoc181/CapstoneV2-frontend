import {useState} from 'react'

function ProviderReviews({therapist, activeUser}) {
  return (
    <div className="testDiv">

    <h1 className='testi'> Dr. {therapist.last_name} would love to hear feedback!</h1>
    <div className="box">
        <form onSubmit={handleSubmit}>
          <br/>
          <label className='Rlabel'>Review Caption:</label>
          <br/>
          <input className='RcapInput' type="text" value={caption} onChange={(e) => setCaption(e.target.value)} placeholder="Review Caption"/>
          <br/>
          <label className='Rlabel'>Share a Photo:</label>
          <br/>
          <input className='RcapInput' type="text" value={pic} onChange={(e) => setPic(e.target.value)} placeholder="Share a Photo"/>
          <br/>
          <label className='Rlabel'>Leave a Review:</label>
          <br/>
          <input className='RcapInput' type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Leave a Review"/>
          <br/>
          <input className='RcapSub' type="submit" value="Submit"/>
        </form>
        <h1 className='testimonies'>Testimonies</h1>
         {newReview.map((review)=> ( 
          <div className="testPost" key={review.id}>
            <h3 className="Rhead" >{review.review_header}</h3>
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