import React from "react";

export default function DeleteModal({ open, handleToggle, deleteContact }) {
  return (
    <dialog size="xs" open={open} onClose={handleToggle}>
      <div className="p-8 flex flex-col items-center gap-4 bg-white rounded-lg shadow-2xl">
        <div>Are you sure you want to delete this contact?</div>
        <div className="flex justify-end p-2 gap-4">
          <button
            onClick={handleToggle}
            className="bg-blue-500 text-white p-1 rounded-md w-12"
          >
            No
          </button>
          <button
            onClick={deleteContact}
            className="bg-red-500 text-white p-1 rounded-md w-12"
          >
            Yes
          </button>
        </div>
      </div>
    </dialog>
  );
}
