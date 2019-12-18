import React from "react"
import PropTypes from 'prop-types';

function Dashboard({ user }) {

  return (
    <>
      <h1>Welcome to the App</h1>
      <p>Hi, {user.nickname ? user.nickname : "friend"}!</p>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.picture}</p>
    </>
  )
}

Dashboard.propTypes = {
  user: PropTypes.object.isRequired
};

export default Dashboard