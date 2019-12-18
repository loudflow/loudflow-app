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
    <Layout>
      <Router>
        <Dashboard path="/app" component={Dashboard} user={user} />
      </Router>
    </Layout>
  )
};

export default App