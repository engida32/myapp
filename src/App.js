import React from "react";
import "./App.css";
import Navbar from "./component/navbar";
import User  from "./component/users/Users";

class App extends React.Component {
  render() {

    return (
      <div className="App">
        <Navbar title='github finder'  icon='fab fa-github' />
        <div className='container'>

        <User/>
        </div>
      </div>
    );
  }
}

export default App;
