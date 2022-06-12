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
      <span>
        <a className="tokenStake" href="https://mandoxstake.com" target="_blank" rel="noreferrer">
          <Button>Token Staking</Button>
        </a>
        </span>
        <span>
        <a className="nftStake" href="https://MandoxNFTstake.com" target="_blank" rel="noreferrer">
          <Button>NFT Staking</Button>
        </a>
        </span>

        

        </div>

   
    </div>
    

  );
}

export default App;
