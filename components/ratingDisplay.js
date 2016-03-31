var RatingDisplay = (props) => {

  var handleSelect = (event) => {
    if (event.target.value !== "") {
      var rating = event.target.value;
      props.handleRating(rating);
    }
  };

  return (
    <select onChange={handleSelect} className="chooseRating">
    <option value="">Choose Rating</option>
    <option value="0">0</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    </select>
  )
};

window.RatingDisplay = RatingDisplay;