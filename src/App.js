import logo from "./logo.svg";
import "./App.css";
import Product from "./components/Product";
import Countdown from "./components/Countdown";
import { useState } from "react";

function App() {
  const [showCountdown, setShowCountdown] = useState(true);
  return (
    <div className="w-screen h-screen">
      {showCountdown && (
        <Countdown
          onHideCountdown={() =>
            // console.log("hi")
            setShowCountdown(false)
          }
        />
      )}
      {/* <Countdown /> */}
      <Product />
    </div>
  );
}

export default App;
