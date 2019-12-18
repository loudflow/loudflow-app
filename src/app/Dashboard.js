import React from "react"
import PropTypes from 'prop-types';

function Dashboard({ user }) {

  return (
    <>
      <h1>Welcome to the App</h1>
      <p>Hi, {user.name ? user.name : "friend"}!</p>
    </>
  )
}

Dashboard.propTypes = {
  user: PropTypes.object.isRequired
};

export default Dashboard