import React from "react";
import useData from "../provider/DataProvider";

export default function AddContact() {
  const { setOpenContactModal } = useData();
  return (
    <div className="flex justify-end p-4">
      <button
        onClick={() => setOpenContactModal(true)}
        className="bg-blue-500 text-white p-2 rounded-md"
      >
        Add Contact
      </button>
    </div>
  );
}
