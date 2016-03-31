var NavBar = (props) => {


  return (
    <nav className="navbar">
      <div className="col-md-12">
        <InputSubmit whenUserInput={props.handleUserInput}/>
      </div>
    </nav>

  )
}

window.NavBar = NavBar;