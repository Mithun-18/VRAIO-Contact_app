import React from "react";
import InputBox from "../InputBox";

export function ContactModal({ open, handleOpen }) {
  return (
    <dialog size="xs" open={open} onClose={handleOpen} className="w-4/5 max-w-2xl rounded-md">
      <form className=" p-4 bg-white rounded shadow-2xl">
        <div className="flex flex-col gap-6">
          <InputBox
            type="text"
            placeholder="Firstname"
            name="firstName"
            required={true}
          />
          <InputBox type="text" placeholder="Lastname" name="lastName" />
          <InputBox type="text" placeholder="Nickname" name="nickName" />
          <InputBox type="date" placeholder="DOB" name="dob" />
          <InputBox
            type="number"
            placeholder="Phone number 1"
            max={10}
            min={10}
            name="phoneNumber1"
            required={true}
          />
          <InputBox
            type="number"
            placeholder="Phone number 2 (Optional)"
            maxLength={10}
            minLength={10}
            name="phoneNumber2"
          />
          <InputBox
            type="email"
            placeholder="Email 1"
            name="email1"
            required={true}
          />
          <InputBox type="email" placeholder="Email 2" name="email2" />
          <div className="flex justify-end gap-4">
            <button
              onClick={handleOpen}
              className="bg-red-500 text-white p-2 rounded-md w-24"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-md w-24"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </dialog>
  );
}
