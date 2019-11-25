import React from "react";
import "./App.css";
import Navbar from "./component/navbar";
import User  from "./component/users/Users";
import Mdb from "./mdv/ButtonPage"
import axios from "axios"

class App extends React.Component {

  state ={
    users:[],
    loading:false
  }

async componentDidMount(){
  this.setState({loading:true});

  const res=await axios.get("https://api.github.com/users");
  this.setState({users:res.data,loading:false});
  
}

  render() {

    return (
      <div className="App">
        <Navbar title='github finder'  icon='fab fa-github'  />
        <div className='container'>
        <User loading={this.state.loading} users={this.state.users}/>
        </div>
        <div className='card' >
          <Mdb/>
        </div>
      </div>
    );
  }
}

export default App;
