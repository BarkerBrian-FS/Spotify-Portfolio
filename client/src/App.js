import React from 'react'

import Login from "./components/Login";
import Search from "./components/Search";

const code = new URLSearchParams(window.location.search).get("code");

function App() {
  return (
    <div>
      {code ? <Search code={code} /> : <Login />}
    </div>
  )
}

export default App
