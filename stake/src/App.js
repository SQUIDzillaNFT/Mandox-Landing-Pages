import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Notice from './notice';
import Home from './home';



function App() {

  return (

      <div className="main">

          <div className="container">

            <Router>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="notice" element={<Notice/>}/>
              </Routes>



            </Router>
          </div>
        {/*</Spin>*/}

      </div>

  );
}

export default App;
