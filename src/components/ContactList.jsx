import React from "react";
import ContactInfo from "./ContactInfo";

export default function ContactList() {
  const contactList = [
    {
      name: "Mithun",
      phone: 636666666,
      email: "mithunpoojary180@gmail.com",
    },
    {
      name: "Virat",
      phone: 909023456,
      email: "Virat@gmail.com",
    },
    {
      name: "Appu",
      phone: 11111111111,
      email: "Appu@gmail.com",
    },
    {
      name: "Mithun poojay",
      phone: 636666609,
      email: "mithunpoojary180@gmail.com",
    },
  ];
  return (
    <div className="flex flex-col items-center">
      {contactList.map((contact) => (
        <div key={contact.phone} className="border-b p-2">
          <ContactInfo
            name={contact.name}
            phone={contact.phone}
            email={contact.email}
          />
        </div>
      ))}
    </div>
  );
}
