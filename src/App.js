import "./App.css";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import Heading from "./components/Heading";
import { DataProvider } from "./provider/DataProvider";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Heading />
        <div className="flex justify-center">
          <div className="w-fit">
            <AddContact />
            <ContactList />
          </div>
        </div>
      </div>
    </DataProvider>
  );
}

export default App;
