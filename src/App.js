import "./App.css";
import HomeScreen from "./components/HomeScreen";
import { DataProvider } from "./provider/DataProvider";

function App() {
  return (
    <DataProvider>
      <HomeScreen />
    </DataProvider>
  );
}

export default App;
