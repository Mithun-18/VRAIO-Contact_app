import { IoCloseSharp } from "react-icons/io5";
import useData from "../../provider/DataProvider";
import { useEffect, useState } from "react";

export default function ViewModal() {
  const { setContactIdToView, contactIdToView, getContact } = useData();
  const [contact, setContact] = useState(null);
  const listStyle = "flex gap-2";

  useEffect(() => {
    setContact(...getContact(contactIdToView));
  }, [contactIdToView]);

  if (!contactIdToView) return null;

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center  bg-black bg-opacity-50 z-50">
      <div className="p-4 bg-white rounded-lg shadow-2xl space-y-4">
        <div className="flex items-end justify-end">
          <IoCloseSharp
            color="red"
            size={24}
            onClick={() => {
              setContactIdToView(null);
              setContact(null);
            }}
          />
        </div>
        <div className={listStyle}>
          <span>Name:-</span>
          <span>{` ${contact?.firstName} ${contact?.lastName}`}</span>
        </div>
        {contact?.nickName && (
          <div className={listStyle}>
            <span>Nick Name:- </span>
            <span> {contact?.nickName}</span>
          </div>
        )}
        {contact?.dob && (
          <div className={listStyle}>
            <span>Date Of Birth:- </span>
            <span>
              {new Date(contact?.dob).toLocaleDateString("en-IN", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
        )}
        <div className={listStyle}>
          <span>Phone Number:- </span>
          <div className="flex flex-col">
            {contact?.phoneNumbers.map((ph, i) => (
              <span key={i}>{ph}</span>
            ))}
          </div>
        </div>
        <div className={listStyle}>
          <span>Email:- </span>
          <div className="flex flex-col">
            {contact?.emails.map((em, i) => (
              <span key={i}>{em}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
