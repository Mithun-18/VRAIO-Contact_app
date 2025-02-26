import React, { useState } from "react";
import ContactInfo from "./ContactInfo";
import DeleteModal from "./modals/DeleteModal";
import useData from "../provider/DataProvider";

export default function ContactList() {
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen((cur) => !cur);

  const { deleteContact } = useData();

  const { contactList } = useData();
  return (
    <div className="flex flex-col items-center">
      {contactList.map((contact) => (
        <div key={contact.id} className="border-b p-2">
          <ContactInfo
            name={`${contact.firstName} ${contact.lastName}`}
            phone={contact.phoneNumber1}
            email={contact.email1}
            handleToggle={handleToggle}
          />
          <DeleteModal
            handleToggle={handleToggle}
            open={open}
            deleteContact={() => deleteContact(contact.id)}
          />
        </div>
      ))}
    </div>
  );
}
