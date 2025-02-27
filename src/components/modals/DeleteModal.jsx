import React from "react";
import useData from "../../provider/DataProvider";

export default function DeleteModal() {
  const { contactIdToDelete, setContactIdToDelete, deleteContact } = useData();
  if (!contactIdToDelete) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl">
        <h2 className="text-lg font-semibold text-center">Delete Contact</h2>
        <p className="text-center text-gray-600 mt-2">
          Are you sure you want to delete this contact?
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={() => setContactIdToDelete(null)}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 transition"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              deleteContact();
              setContactIdToDelete(null);
            }}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
