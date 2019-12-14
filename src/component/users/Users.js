import React from "react";
import UserItem from "./UserItem";
import SpinnerPage from "./SpinnerPage";

const Users = ({ users, loading }) => {
  if (loading) {

    return <SpinnerPage />
  }
  else {
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



}
const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr',
  gridGap: '1rem'
}

export default Users;
