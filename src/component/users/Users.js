import React, { Component } from "react";
import UserItem from "./UserItem";
import Mdb from "SpinnerPage.js"

const Users =({users,loading })=> {

 
    return (
      <div style={userStyle}>
        {users.map(user => (
          <div>
            <UserItem key={user.id} user={user} />
          </div>
        ))}
      </div>
    );
  
}
const  userStyle ={
  display:'grid',
  gridTemplateColumns:'repeat(3,1fr',
  gridGap:'1rem'
}

export default Users;
