import "./App.css";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import Heading from "./components/Heading";
import { ContactModal } from "./components/modals/ContactModal";
import DeleteModal from "./components/modals/DeleteModal";
import ViewModal from "./components/modals/ViewModal";
import { DataProvider } from "./provider/DataProvider";

function App() {
  return (
    <DataProvider>
      <Heading />
      <div className="flex justify-center">
        <div className="w-fit">
          <AddContact />
          <ContactList />
          <ViewModal />
          <DeleteModal />
          <ContactModal />
        </div>
      </div>
    </DataProvider>
  );
}

export default App;
