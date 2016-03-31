var PhotoDisplay = (props) => {

  return (
    <div className="photoDisplay">
    <img className="photo" src={props.currentPhoto.url}></img>
    <h4>{props.currentPhoto.title}</h4>
    <span className="rating"> Rating of {props.currentPhoto.rating} out of 5 stars</span>
    <RatingDisplay currentPhoto={props.currentPhoto} handleRating={props.handleRating}/>
    </div>

  )
}

window.PhotoDisplay = PhotoDisplay;

