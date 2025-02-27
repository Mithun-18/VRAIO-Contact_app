import React from "react";
import useData from "../provider/DataProvider";
import ContactInfo from "./ContactInfo";

export default function ContactList() {
  const { contactList } = useData();

  return (
    <div className="flex flex-col items-center">
      {contactList.map((contact) => (
        <div key={contact.id} className="border-b p-2">
          <ContactInfo
            id={contact.id}
            name={`${contact.firstName} ${contact.lastName}`}
            phone={contact.phoneNumber1}
            email={contact.email1}
          />
        </div>
      ))}
    </div>
  );
}
