import React from "react";
import "./App.css";
// import Navbar from "./component/navbar";
import User from "./component/users/Users";
import Mdb from "./mdv/ButtonPage";
import axios from "axios";
import Navbar1 from "./component/Navbar1";
import Search from "./component/users/search";

class App extends React.Component {
  state = {
    users: [],
    loading: false
  };

  //   async componentDidMount() {
  //     this.setState({ loading: true });
  //     console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET)

  //     const res = await axios.get(`https://api.github.com/users?/client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}$client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`");
  //     this.setState({ users: res.data, loading: false });

  //  }
  searchUsers = async text => {
    const res = await axios.get(`https://api.github.com/search/users?q=${text}$client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
    this.setState({ users: res.data.items, loading: false });
  };

  render() {
    return (
      <div className="App">
        <div>
          <Navbar1 title="github finder" icon="fab fa-github" />
        </div>
        <div className="container">
          <Search searchUsers={this.searchUsers} />
          <User loading={this.state.loading} users={this.state.users} />
        </div>
        <div className="card">
          <Mdb />
        </div>
      </div>
    );
  }
}

export default App;
