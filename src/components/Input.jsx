import React from "react";

export default function Input({ label, value, onChange }) {
  return (
    <div>
      {label} : <input value={value} onChange={onChange} />
    </div>
  );
}
