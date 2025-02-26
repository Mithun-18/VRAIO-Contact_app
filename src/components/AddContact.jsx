import React, { useState } from "react";
import { ContactModal } from "./modals/ContactModal";

export default function AddContact() {
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen((cur) => !cur);
  return (
    <div className="flex justify-end p-4">
      <button
        onClick={handleToggle}
        className="bg-blue-500 text-white p-2 rounded-md"
      >
        Add Contact
      </button>
      <ContactModal open={open} handleToggle={handleToggle} />
    </div>
  );
}
