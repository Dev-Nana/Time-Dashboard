import { Selector } from "./components/selector/selector";
import { Cards } from "./components/cards/cards";
import './index.css';

function App() {
  return (
    <div className="app_content">
      <Selector/>
      <Cards/>
    </div>
  );
}

export default App;
