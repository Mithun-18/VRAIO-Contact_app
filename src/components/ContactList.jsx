import React, { useEffect } from "react";
import useData from "../provider/DataProvider";
import ContactInfo from "./ContactInfo";

export default function ContactList() {
  const { contactList, getAllContacts } = useData();

  useEffect(() => {
    getAllContacts();
  }, []);

  return (
    <div className="flex flex-col items-center">
      {[...contactList]
        .sort((a, b) => a.firstName.localeCompare(b.firstName))
        .map((contact) => (
          <div key={contact?.contactId} className="border-b p-2">
            <ContactInfo
              id={contact?.contactId}
              name={`${contact?.firstName} ${contact?.lastName}`}
              phone={contact?.phoneNumbers[0]}
              email={contact?.emails[0]}
            />
          </div>
        ))}
    </div>
  );
}
