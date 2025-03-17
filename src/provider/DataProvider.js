import { createContext, useContext, useState } from "react";
import http from "../services/http";
import { GET_ALL_CONTACTS } from "../services/constants";

const DataContext = createContext();
export function DataProvider({ children }) {
  const [contactList, setContactList] = useState([]);

  const [openContactModal, setOpenContactModal] = useState(false);
  const [contactIdToDelete, setContactIdToDelete] = useState(null);
  const [contactIdToView, setContactIdToView] = useState(null);
  const [contactIdToUpdate, setContactIdToUpdate] = useState(null);

  function getContact(contactId) {
    return contactList.filter((con) => contactId === con.contactId);
  }

  async function getAllContacts() {
    try {
      let res = await http.get(GET_ALL_CONTACTS);
      setContactList([...res.data.data]);
    } catch (error) {
      console.log(error);
    }
  }

  function addContact(contact) {
    try {
      setContactList((prev) => [...prev, contact]);
    } catch (error) {}
  }

  function updateContact(contact) {
    try {
      deleteContact(contact.id);
      addContact(contact);
    } catch (error) {}
  }

  function deleteContact(contactId) {
    setContactList(contactList.filter((contact) => contact.id !== contactId));
  }

  return (
    <DataContext.Provider
      value={{
        contactList,
        openContactModal,
        setOpenContactModal,
        contactIdToDelete,
        setContactIdToDelete,
        contactIdToView,
        setContactIdToView,
        contactIdToUpdate,
        setContactIdToUpdate,
        getContact,
        addContact,
        deleteContact,
        updateContact,
        getAllContacts,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default function useData() {
  return useContext(DataContext);
}
