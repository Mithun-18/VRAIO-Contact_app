import { createContext, useContext, useState } from "react";
import http from "../services/http";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  GET_ALL_CONTACTS,
  UPDATE_CONTACT,
} from "../services/constants";

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
    } catch (GET_ALL_CONTACTS) {}
  }

  async function addContact(contact) {
    try {
      let res = await http.post(ADD_CONTACT, { contact });
      contact.contactId = res.data.data.contactId;
      setContactList((prev) => [...prev, contact]);
    } catch (_) {}
  }

  async function updateContact(contact) {
    try {
      await http.put(UPDATE_CONTACT, { contact });
      setContactList(
        contactList.map((con) => {
          if (con.contactId === contact.contactId) {
            return contact;
          }
          return con;
        })
      );
    } catch (error) {}
  }

  async function deleteContact(contactId) {
    try {
      await http.delete(DELETE_CONTACT, { params: { contactId } });
      setContactList(
        contactList.filter((contact) => contact.contactId !== contactId)
      );
    } catch (_) {}
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
