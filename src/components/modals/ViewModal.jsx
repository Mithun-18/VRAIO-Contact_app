import { IoCloseSharp } from "react-icons/io5";
import useData from "../../provider/DataProvider";

export default function ViewModal() {
  const { setContactIdToView, contactIdToView, getContact } = useData();
  const [contact] = getContact();
  const listStyle = "flex gap-2";

  if (!contactIdToView) return null;

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center  bg-black bg-opacity-50 z-50">
      <div className="p-4 bg-white rounded-lg shadow-2xl space-y-4">
        <div className="flex items-end justify-end">
          <IoCloseSharp
            color="red"
            size={24}
            onClick={() => setContactIdToView(null)}
          />
        </div>
        <div className={listStyle}>
          <span>Name:-</span>
          <span>{` ${contact.firstName} ${contact.lastName}`}</span>
        </div>
        {contact.nickName && (
          <div className={listStyle}>
            <span>Nick Name:- </span>
            <span> {contact.nickName}</span>
          </div>
        )}
        {contact.dob && (
          <div className={listStyle}>
            <span>Date Of Birth:- </span>
            <span>{contact.dob}</span>
          </div>
        )}
        <div className={listStyle}>
          <span>Phone Number:- </span>
          <span>{contact.phoneNumber1}</span>
        </div>
        {contact.phoneNumber2 && (
          <div className={listStyle}>
            <span>Phone Number 2:- </span>
            <span>{contact.phoneNumber2}</span>
          </div>
        )}
        <div className={listStyle}>
          <span>Email:- </span>
          <span>{contact.email1}</span>
        </div>
        {contact.email2 && (
          <div className={listStyle}>
            <span>Email 2:- </span>
            <span>{contact.email2}</span>
          </div>
        )}
      </div>
    </div>
  );
}
