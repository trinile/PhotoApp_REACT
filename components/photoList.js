var PhotoList = (props) => {



  return (
    <div className="photoList">
    <h4>List of Photos</h4>
    {props.photos.map((photo) => {
      return <PhotoListEntry whenClicked={props.onUserClick} photo={photo} /> 
    } )}  
    </div>
  )
};



window.PhotoList = PhotoList;

    // <h4>List of Photos</h4>
    //   {props.photos.map((photo) =>  {
    //   <PhotoListEntry whenClicked={props.onUserClick} photoListEntry={photo} /> 
    // } )}