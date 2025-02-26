import { createContext, useContext, useEffect, useState } from "react";

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

  function addContact(contact) {
    try {
      setContactList((prev) => [...prev, contact]);
    } catch (error) {
      console.log("here", error);
    }
  }

  function deleteContact(contact_id) {
    setContactList(contactList.filter((contact) => contact.id !== contact_id));
  }

  useEffect(() => {
    console.log("contactLst", contactList);
  }, [contactList]);
  return (
    <DataContext.Provider value={{ contactList, addContact, deleteContact }}>
      {children}
    </DataContext.Provider>
  );
}

export default function useData() {
  return useContext(DataContext);
}
