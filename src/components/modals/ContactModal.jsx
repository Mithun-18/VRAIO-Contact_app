import React, { useRef } from "react";
import InputBox from "../InputBox";
import useData from "../../provider/DataProvider";

export function ContactModal({ open, handleToggle }) {
  const { addContact } = useData();
  const firstNameRef = useRef(0);
  const lastNameRef = useRef(0);
  const nickNameRef = useRef(0);
  const dobRef = useRef(0);
  const phoneNumber1Ref = useRef(0);
  const phoneNumber2Ref = useRef(0);
  const email1Ref = useRef(0);
  const email2Ref = useRef(0);

  function handleSubmit() {
    let data = {
      id: Date.now(),
      firstName: firstNameRef?.current?.value,
      lastName: lastNameRef?.current?.value,
      nickName: nickNameRef?.current?.value,
      dob: dobRef?.current?.value,
      phoneNumber1: phoneNumber1Ref?.current?.value,
      phoneNumber2: phoneNumber2Ref?.current?.value,
      email1: email1Ref?.current?.value,
      email2: email2Ref?.current?.value,
    };
    console.log("data", data);
    addContact(data);
    firstNameRef.current.value = "";
    lastNameRef.current.value = "";
    nickNameRef.current.value = "";
    dobRef.current.value = "";
    phoneNumber1Ref.current.value = "";
    phoneNumber2Ref.current.value = "";
    email1Ref.current.value = "";
    email2Ref.current.value = "";
    handleToggle();
  }

  if (!open) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <form
        className=" p-4 bg-white rounded-lg shadow-2xl w-4/5 max-w-2xl"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className="flex flex-col gap-6">
          <InputBox
            type="text"
            placeholder="Firstname"
            inputRef={firstNameRef}
            required={true}
          />
          <InputBox
            type="text"
            placeholder="Lastname"
            name="lastName"
            inputRef={lastNameRef}
          />
          <InputBox
            type="text"
            placeholder="Nickname"
            name="nickName"
            inputRef={nickNameRef}
          />
          <InputBox
            type="date"
            placeholder="DOB"
            name="dob"
            inputRef={dobRef}
          />
          <InputBox
            type="tel"
            placeholder="Phone number 1"
            pattern="\d{10}"
            Msg="Please enter exactly 10 digits"
            inputRef={phoneNumber1Ref}
            required={true}
          />
          <InputBox
            type="tel"
            placeholder="Phone number 2 (Optional)"
            pattern="\d{10}"
            Msg="Please enter exactly 10 digits"
            inputRef={phoneNumber2Ref}
          />
          <InputBox
            type="email"
            placeholder="Email 1"
            inputRef={email1Ref}
            required={true}
          />
          <InputBox
            type="email"
            placeholder="Email 2"
            name="email2"
            inputRef={email2Ref}
          />
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={handleToggle}
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
    </div>
  );
}
