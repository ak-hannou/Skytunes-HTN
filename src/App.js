import "./App.css";
import { TextField, Button } from "@mui/material";
import { Gradient } from "react-gradient";
import Logo from "./logo.svg";

const gradients = [
  ["#F8D770", "#E27AB2"],
  ["#574B95", "#2459B6", "#OO2966"],
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Gradient
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "100%",
            alignItems: "center",
          }}
          gradients={gradients} // required
          property="background"
          duration={9000}
          angle="0deg"
        >
          <div style={{ display: "flex", alignItems: 'center', justifyContent: "space-between" }}>
            <img style={{height: 250, width: 250}} src={Logo} alt="skytunes logo" />
            <h3 style={{marginLeft: 100, textAlign: 'right', color: '#OO2966'}}>music from your <br/> environment.</h3>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p style={{ marginTop: 0, textAlign: "left" }}>
              connect your Spotify
              <br />
              and location to get started
            </p>

            <TextField required id="outlined-required" label="Required" />
          </div>
          
        </Gradient>
      </header>
      <footer>
        
        </footer>
    </div>
  );
}

export default App;
