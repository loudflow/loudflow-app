import React from "react"
import { Router } from "@reach/router"

import { Layout } from "../../components"
import { Dashboard, Systems, Worlds, Agents } from "../index"
import { login, isAuthenticated, getProfile } from "../../utils/auth"

const App = () => {

  if (!isAuthenticated()) {
    login();
    return <p>Redirecting to login...</p>
  }

  const user = getProfile();

  return (
    <Layout user={user} >
      <Router>
        <Dashboard path="/app" user={user} default />
        <Systems path="/app/systems" user={user} />
        <Worlds path="/app/worlds" user={user} />
        <Agents path="/app/agents" user={user} />
      </Router>
    </Layout>
  )
};

export default App