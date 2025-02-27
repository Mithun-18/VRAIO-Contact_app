import React from "react";
import useData from "../provider/DataProvider";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import Heading from "./Heading";
import DeleteModal from "./modals/DeleteModal";
import { ContactModal } from "./modals/ContactModal";

export default function HomeScreen() {
  const { contactIdToDelete, setContactIdToDelete, deleteContact } = useData();
  const { openContactModal, setOpenContactModal } = useData();
  const handleToggle = () => setOpenContactModal((cur) => !cur);

  return (
    <>
      <Heading />
      <div className="flex justify-center">
        <div className="w-fit">
          <AddContact handleToggle={handleToggle} />
          <ContactList />
          <DeleteModal
            setContactIdToDelete={setContactIdToDelete}
            open={contactIdToDelete}
            deleteContact={() => deleteContact(contactIdToDelete)}
          />
          <ContactModal open={openContactModal} handleToggle={handleToggle} />
        </div>
      </div>
    </>
  );
}
