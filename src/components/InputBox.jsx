import React from "react";

export default function InputBox({
  type,
  placeholder,
  name,
  required,
  minLength,
  maxLength,
}) {
  return (
    <input
      type={type || "text"}
      placeholder={placeholder}
      name={name}
      required={required || false}
      minLength={minLength}
      maxLength={maxLength}
      className="input input-bordered border rounded-md p-2"
    />
  );
}
