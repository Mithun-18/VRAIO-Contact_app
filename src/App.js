import "./App.css";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import Heading from "./components/Heading";

function App() {
  return (
    <div className="App">
      <Heading />
      <div className="flex justify-center">
        <div className="w-fit">
          <AddContact />
          <ContactList />
        </div>
      </div>
    </div>
  );
}

export default App;
