import React, { useEffect, useRef, useState } from "react";
import { IoMdAddCircle, IoMdRemoveCircle } from "react-icons/io";
import useData from "../../provider/DataProvider";
import InputBox from "../InputBox";

export function ContactModal() {
  const {
    addContact,
    openContactModal,
    setOpenContactModal,
    getContact,
    contactIdToUpdate,
    setContactIdToUpdate,
    updateContact,
  } = useData();
  const firstNameRef = useRef(0);
  const lastNameRef = useRef(0);
  const nickNameRef = useRef(0);
  const dobRef = useRef(0);
  const phoneNumberRef = useRef([]);
  const email1Ref = useRef(0);
  const email2Ref = useRef(0);

  const [contact] = getContact(contactIdToUpdate);
  const [addPhoneField, setAddPhoneField] = useState([0]);

  useEffect(() => {
    if (contact?.phoneNumber) {
      setAddPhoneField(contact.phoneNumber.map((_, i) => i));
    }
  }, [contact?.phoneNumber]);

  function handleSubmit() {
    const phNums = addPhoneField.map(
      (val) => +phoneNumberRef.current[val].value
    );
    let data = {
      id: contact?.id || Date.now(),
      firstName: firstNameRef?.current?.value,
      lastName: lastNameRef?.current?.value,
      nickName: nickNameRef?.current?.value,
      dob: dobRef?.current?.value,
      phoneNumber: phNums,
      email1: email1Ref?.current?.value,
      email2: email2Ref?.current?.value,
    };
    if (contact?.id) {
      updateContact(data);
      setContactIdToUpdate(null);
    } else {
      addContact(data);
    }
    setOpenContactModal(false);
    setAddPhoneField([0]);
  }

  if (!openContactModal) return null;
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
            value={contact?.firstName}
          />
          <InputBox
            type="text"
            placeholder="Lastname"
            name="lastName"
            inputRef={lastNameRef}
            value={contact?.lastName}
          />
          <InputBox
            type="text"
            placeholder="Nickname"
            name="nickName"
            inputRef={nickNameRef}
            value={contact?.nickName}
          />
          <InputBox
            type="date"
            placeholder="DOB"
            name="dob"
            inputRef={dobRef}
            value={contact?.dob}
          />
          {addPhoneField.map((val, i) => (
            <div className="flex items-center gap-4" key={val}>
              <InputBox
                type="tel"
                placeholder="Phone number"
                pattern="\d{10}"
                Msg="Please enter exactly 10 digits"
                inputRef={(el) => (phoneNumberRef.current[val] = el)}
                value={contact?.phoneNumber[i]}
              />
              {i === 0 ? (
                <IoMdAddCircle
                  size={28}
                  className="text-blue-500"
                  onClick={() =>
                    setAddPhoneField([
                      ...addPhoneField,
                      addPhoneField[addPhoneField.length - 1] + 1,
                    ])
                  }
                />
              ) : (
                <IoMdRemoveCircle
                  size={28}
                  className="text-red-500"
                  onClick={() =>
                    setAddPhoneField(
                      addPhoneField.filter((value) => val !== value)
                    )
                  }
                />
              )}
            </div>
          ))}
          <InputBox
            type="email"
            placeholder="Email 1"
            inputRef={email1Ref}
            required={true}
            value={contact?.email1}
          />
          <InputBox
            type="email"
            placeholder="Email 2"
            name="email2"
            inputRef={email2Ref}
            value={contact?.email2}
          />
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={() => {
                setOpenContactModal(false);
                setContactIdToUpdate(null);
                setAddPhoneField([0]);
              }}
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
