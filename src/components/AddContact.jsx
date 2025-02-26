import React from "react";
import { ContactModal } from "./modal/ContactModal";

export default function AddContact() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  return (
    <div className="flex justify-end p-4">
      <button
        onClick={handleOpen}
        className="bg-blue-500 text-white p-2 rounded-md"
      >
        Add Contact
      </button>
      {open && <ContactModal open={open} handleOpen={handleOpen} />}
    </div>
  );
}
