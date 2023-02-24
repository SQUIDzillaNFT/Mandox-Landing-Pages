
import '../App.css';
import { Button} from 'react-bootstrap';
import pr from '../images/notice.jpg';
import token from '../images/token2.png';

import {Link} from "react-router-dom";

function App() {
  return (
    <div className="App">

        <div className="main-section2">

        

        <t1 className="t1"> Mandox.Farm Staking Notice  

        </t1>
        <div className="welcome">

        <a>
          <Link to='/' className="notice">Return Home</Link>
          </a>
        </div>

        <h2>- Please read over the article below -</h2>

        <a><img className='pr' src={pr} /></a>


        </div>
        

        

   
    </div>
    

  );
}

export default App;
