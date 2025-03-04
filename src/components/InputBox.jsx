import React, { useState } from "react";

export default function InputBox({
  type,
  placeholder,
  name,
  required,
  pattern,
  Msg,
  inputRef,
  value,
}) {
  const [val, setVal] = useState(value);
  return (
    <input
      type={type || "text"}
      placeholder={placeholder}
      name={name}
      required={required || false}
      pattern={pattern}
      title={Msg}
      ref={inputRef}
      value={val || ""}
      onChange={(e) => setVal(e.target.value)}
      className="input input-bordered border rounded-md p-2 w-full"
    />
  );
}
