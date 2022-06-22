import logo from './images/biglogo.png';
import './App.css';
import { Button} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
            <div>

        </div>
      
        <div className="main-section">
      
        <img src={logo} className="logo-img" alt="logo" />
        
        <h1>
          Choose your Stake.
        </h1>
        <h2>Token Staking</h2>
      
        <a className="tokenStake" href="https://mandoxstake.com" target="_blank" rel="noreferrer">
          <Button>Mandox Staking</Button>
        </a>
        <div>
          <h2>NFT Staking</h2>
        <span>
        <a className="nftStake" href="https://lacedameon.farm" target="_blank" rel="noreferrer">
          <Button>Lacedameon</Button>
        </a>
        </span>
        <span>
        <a className="nftStake" href="https://cyborx.farm" target="_blank" rel="noreferrer">
          <Button>   The Cyborx   </Button>
        </a>
        </span>
        </div>
        <div className="soon">
          <h2>Coming Soon...</h2>
        <span>
        <a className="bio" href="" target="_blank" rel="noreferrer">
          <Button>Bio Apes</Button>
        </a>
        </span>
        <span>
        <a className="lost" href="" target="_blank" rel="noreferrer">
          <Button>   Lost Kids   </Button>
        </a>
        </span>
        </div>
        

        </div>

   
    </div>
    

  );
}

export default App;
