import "./App.css";
import Navbar from "./components/common/Navbar";
import PensionFunds from "./views/PensionFunds";
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
