import React from "react";

export default function InputBox({
  type,
  placeholder,
  name,
  required,
  pattern,
  Msg,
  inputRef,
}) {
  return (
    <input
      type={type || "text"}
      placeholder={placeholder}
      name={name}
      required={required || false}
      pattern={pattern}
      title={Msg}
      ref={inputRef}
      className="input input-bordered border rounded-md p-2"
    />
  );
}
