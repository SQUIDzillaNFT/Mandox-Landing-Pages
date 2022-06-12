import logo from './images/Bioape.png';
import './App.css';
import videoSrc from './images/Bioape.mp4';

function App() {
  return (
    <div className="App">
            <div>
        <video autoPlay muted loop id="myVideo">
          <source src={videoSrc} type="video/mp4" />
        </video>
        </div>
      
        <div className="main-section">
      
        <img src={logo} className="logo-img" alt="logo" />
        <h1>
          SOLD OUT!
        </h1>
        <p className="redirectmsg">
          Please Visit <a className="link" href="https://opensea.io/collection/bioapesclub">Opensea</a> to buy Secondary Apes!
        </p>


        

        </div>

   
    </div>
    

  );
}

export default App;
