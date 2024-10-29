import logo from '../images/biglogo.png';
import '../App.css';
import { Button} from 'react-bootstrap';
import cyborx from '../images/cyborx.png';
import laced from '../images/laced.png';
import token from '../images/token2.png';
import lost from '../images/lost.png';
import bio from '../images/bio.png';
import eva from '../images/eva.png';
import gem from '../images/GEM.png';
import {Link} from "react-router-dom";

function App() {
  return (
    <div className="App">

        <div className="main-section">

        

        <t1 className="t1"> Welcome to Mandox.Farm  

        </t1>
        <div className="welcome">
        <div className="message">
          Please Click below to read an Important Announcement
        </div>
        <a>
          <Link to='/Notice' className="notice">***Click Here***</Link>
          </a>
        </div>
        <br/>
        <t1 className="t1"> NFT Staking Ended 11/15/2023

</t1><br/>
<t1 className="t1"> Please unstake your NFTs 

</t1>
<h1>
          Gem is now Live!
        </h1>
        <a className="tokenStake" href="https://mandoxgem.com" target="_blank" rel="noreferrer">
          <Button><img src={gem}/></Button>
        </a>

        <h1>
          Choose your Stake.
        </h1>
        <div>
          <h2>- NFT Staking -</h2>
          
         <span> 
        <a className="nftStake" href="https://laceystake.mandoxgem.com" target="_blank" rel="noreferrer">
          <Button><img src={laced}/></Button>
        </a>
        </span>
        <span>
        <a className="cb" href="https://cybstake.mandoxgem.com" target="_blank" rel="noreferrer">
          <Button>   <img src={cyborx}/>   </Button>
        </a>
        </span>
        
        <a className="bio" href="https://biostake.mandoxgem.com" target="_blank" rel="noreferrer">
          <Button> <img src={bio}/>  </Button>
        </a>
        </div>
        <span>
        <a className="eva" href="https://evastake.mandoxgem.com" target="_blank" rel="noreferrer">
          <Button>  <img src={eva}/>  </Button>
        </a>
        </span>
       


        <span>
        <a className="lost" href="https://loststake.mandoxgem.com" target="_blank" rel="noreferrer">
          <Button>  <img src={lost}/>  </Button>
        </a>
        </span>

        </div>
        

        

   
    </div>
    

  );
}

export default App;
