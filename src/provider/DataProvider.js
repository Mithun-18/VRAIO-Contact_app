import { createContext, useContext, useState } from "react";

const DataContext = createContext();
export function DataProvider({ children }) {
  const [contactList, setContactList] = useState([
    {
      id: 123,
      firstName: "Mithun",
      lastName: "Poojary",
      nickName: "Mithu",
      dob: "26-09-2003",
      phoneNumber1: 6360320806,
      phoneNumber2: "",
      email1: "mithunpoojary180@gmail.com",
      email2: "",
    },
    {
      id: 124,
      firstName: "Sudeep",
      lastName: "Acharya",
      nickName: "",
      dob: "22-01-2001",
      phoneNumber1: 9360320608,
      phoneNumber2: "",
      email1: "s@gmail.com",
      email2: "",
    },
    {
      id: 125,
      firstName: "Manoj",
      lastName: "shetty",
      nickName: "",
      dob: "25-09-2003",
      phoneNumber1: 8880320806,
      phoneNumber2: "",
      email1: "manoj@gmail.com",
      email2: "",
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

  async function updateContact(contact) {
    // try {
    //   deleteContact(contact.id);
    //   addContact(contact);
    // } catch (error) {
    //   console.log("error", error);
    // }
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
