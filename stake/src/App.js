import logo from './images/biglogo.png';
import './App.css';
import { Button} from 'react-bootstrap';
import cyborx from './images/cyborx.png';
import laced from './images/laced.png';
import token from './images/token2.png';
import lost from './images/lost.png';
import bio from './images/bio.png';

function App() {
  return (
    <div className="App">

        <div className="main-section">

        <t1 className="t1"> Welcome to Mandox.Farm</t1>
        <h1>
          Choose your Stake.
        </h1>
        <h2>Token Staking</h2>
      
        <a className="tokenStake" href="https://mandoxstake.com" target="_blank" rel="noreferrer">
          <Button><img src={token}/></Button>
        </a>
        <div>
          <h2>NFT Staking</h2>
         <span> 
        <a className="nftStake" href="https://lacedameon.farm" target="_blank" rel="noreferrer">
          <Button><img src={laced}/></Button>
        </a>
        </span>
        <span>
        <a className="cb" href="https://cyborx.farm" target="_blank" rel="noreferrer">
          <Button>   <img src={cyborx}/>   </Button>
        </a>
        </span>
        </div>
        <div className="soon">
          <h2>Coming Soon...</h2>
        <span>
        <a className="bio" href="" target="_blank" rel="noreferrer">
          <Button> <img src={bio}/>  </Button>
        </a>
        </span>
        <span>
        <a className="lost" href="" target="_blank" rel="noreferrer">
          <Button>  <img src={lost}/>  </Button>
        </a>
        </span>
        </div>
        

        </div>

   
    </div>
    

  );
}

export default App;
