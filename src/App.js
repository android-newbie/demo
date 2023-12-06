import React from "react";
import Greet from "./Greet";
import Greetings from "./Greetings";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <Link to='/greet'>
          <h1>Go to Greet</h1>
        </Link>

        <Link to='/greetings'>
          <h1>Go to Greetings</h1>
        </Link>

        <Routes>
          <Route path='/greet' element={
            <Greet name='piyush' date='07/12/23'></Greet>
          }></Route>

          <Route path='/greetings' element={
            <Greetings />
          }>
          </Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App;