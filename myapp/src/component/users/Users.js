import React, { Component } from "react";
import UserItem from "./UserItem";

class Users extends Component {
  state = {
    user: [
      {
        id: "1",
        login: "whatever22",
        avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
        html_url: "https://github.com/mojombo"
      },
      {
        id: "2",
        login: "whatever2",
        avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
        html_url: "https://github.com/defunkt"
      },
      {
        id: "3",
        login: "whatever1",
        avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
        html_url: "https://github.com/pjhyett"
      }
    ]
  };
  render() {
    return (
      <div style={userStyle}>
        {this.state.user.map(user => (
          <div>
            <UserItem key={user.id} user={user} />
          </div>
        ))}
      </div>
    );
  }
}
const  userStyle ={
  display:'grid',
  gridTemplateColumns:'repeat(3,1fr',
  gridGap:'1rem'
}

export default Users;
