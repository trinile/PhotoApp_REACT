class InputSubmit extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(event) {
  event.preventDefault();
  var imageURL = this.refs.imageURL.value;
  var imageTitle = this.refs.imageTitle.value;
  this.props.whenUserInput(imageURL, imageTitle);
  this.clearInputs();
}

  clearInputs() {
    console.log('clear input\s');
    this.refs.imageTitle.value = "";
    this.refs.imageURL.value = "";
  }

render() {
 return (
  <div className="submitPhoto" onSubmit={this.handleSubmit.bind(this)} >
  <form className="form-inline">
  <div className="form-group">
    <label>Image URL</label>
    <input ref="imageURL" type="text" className="form-control" id="imageURL" placeholder="Type in Image URL Here"></input>
  </div>
  <div className="form-group">
    <label>Image Title</label>
    <input ref="imageTitle" type="text" className="form-control" id="imageTitle" placeholder="Type in Image Title Here"></input>
    </div> 
    <button type="submit" className="btn btn-default">Submit</button>
    </form>
  </div>
  )

  }

};

window.InputSubmit = InputSubmit;