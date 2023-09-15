import "./App.css";
import Navbar from "./components/Navbar";
import PensionFunds from "./components/PensionFunds";
import funds from "./data/funds.json";

function App() {
  return (
    <div>
      <Navbar />
      <PensionFunds funds={funds} />
    </div>
  );
}

export default App;
