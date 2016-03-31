// var update = require('react-addons-update');
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoList: photosData,
      currentPhoto: photosData[0]
    };
  }
  //no commas!!
  handleUserClick(currentPhoto) {
    this.setState({
      currentPhoto: currentPhoto
    });
  }

  handleUserInput(url, title) {
    var newPhotoList = this.state.photoList.slice();
    newPhotoList.push({url: url, title: title});
    console.log(newPhotoList)
    console.log(url, title);

    this.setState({
      photoList: newPhotoList
    });
  }
  handleRatingSelect(rating) {
    this.state.currentPhoto.rating = rating;
    this.setState({
      currentPhoto: this.state.currentPhoto
    });

  }

  render() {
    return (
      <div className="container">
       <div className="NavBar">
          <NavBar handleUserInput={this.handleUserInput.bind(this)}/>
      </div>
      <div className="row">
      <ul className="col-md-6 photoList">
        <PhotoList photos={ this.state.photoList } onUserClick={this.handleUserClick.bind(this)}/>
      </ul>
      <div className ="col-md-6 photoDisplay">
        <PhotoDisplay handleRating={ this.handleRatingSelect.bind(this)} currentPhoto={this.state.currentPhoto}/>
      </div>
      </div>

    </div>
    ) 
  }

};


ReactDOM.render(<App/>, document.getElementById('app'));