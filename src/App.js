import logo from "./logo.svg";
import "./App.scss";
import Base from "./containers/Base/Base";
import { GlobalProvider } from "./context/globalContext";

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Base />
      </GlobalProvider>
    </div>
  );
}

export default App;
