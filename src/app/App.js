import React from "react"
import { Router } from "@reach/router"

import Dashboard from "./Dashboard"
import { Layout } from "../components/layout"
import { login, logout, isAuthenticated, getProfile } from "../utils/auth"

const App = () => {

  if (!isAuthenticated()) {
    login();
    return <p>Redirecting to login...</p>
  }

  const user = getProfile();

  return (
    <Layout user={user} >
      <Router>
        <Dashboard path="/app" user={user} />
      </Router>
    </Layout>
  )
};

export default App