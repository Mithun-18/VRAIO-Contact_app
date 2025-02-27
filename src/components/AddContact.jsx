import React from "react";

export default function AddContact({ handleToggle }) {
  return (
    <div className="flex justify-end p-4">
      <button
        onClick={handleToggle}
        className="bg-blue-500 text-white p-2 rounded-md"
      >
        Add Contact
      </button>
    </div>
  );
}
