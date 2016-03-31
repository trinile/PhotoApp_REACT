var PhotoListEntry = (props) =>  {


  var handleClick = () => {
    console.log(this);
    props.whenClicked(props.photo);
  };

  return (
    <li className="photoEntry" onClick={handleClick}>
    { props.photo.title }
    </li>
  );

}

window.PhotoListEntry = PhotoListEntry;