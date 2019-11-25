import React from "react";
import "./App.css";
import Navbar from "./component/navbar";
import User  from "./component/users/Users";
import Mdb from "./mdv/ButtonPage"

class App extends React.Component {
componentDidMount(){
  console.log(1223)
}

  render() {

    return (
      <div className="App">
        <Navbar title='github finder'  icon='fab fa-github' />
        <div className='container'>

        <User/>
        </div>
        <div className='container'>
          <Mdb/>
        </div>
      </div>
    );
  }
}

export default App;
