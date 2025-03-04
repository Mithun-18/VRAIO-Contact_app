import { createContext, useContext, useState } from "react";

const DataContext = createContext();
export function DataProvider({ children }) {
  const [contactList, setContactList] = useState([
    {
      id: 123,
      firstName: "Mithun",
      lastName: "Poojary",
      nickName: "Mithu",
      dob: "2003-09-26",
      phoneNumber: [6360320806],
      email: ["mithunpoojary180@gmail.com", "mith80441@gmail.com"],
    },
    {
      id: 124,
      firstName: "Sudeep",
      lastName: "Acharya",
      nickName: "",
      dob: "2003-02-24",
      phoneNumber: [9999999999, 6360320806],
      email: ["s@gmail.com"],
    },
    {
      id: 125,
      firstName: "Manoj",
      lastName: "shetty",
      nickName: "",
      dob: "2003-02-24",
      phoneNumber: [9360320806],
      email: ["manoj@gmail.com"],
    },
  ]);

  const [openContactModal, setOpenContactModal] = useState(false);
  const [contactIdToDelete, setContactIdToDelete] = useState(null);
  const [contactIdToView, setContactIdToView] = useState(null);
  const [contactIdToUpdate, setContactIdToUpdate] = useState(null);

  function getContact(contactId) {
    return contactList.filter((con) => contactId === con.id);
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
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default function useData() {
  return useContext(DataContext);
}
