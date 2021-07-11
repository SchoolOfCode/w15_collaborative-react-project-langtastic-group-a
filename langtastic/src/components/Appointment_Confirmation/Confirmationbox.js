import { useState } from "react";
export default function ConfirmationBox() {
  const [confirmation, setConfirmation] = useState(null);
  function handleClick(value) {
    if (value === "no") {
      console.log("hello from no");
    }
  }
  return (
    <div>
      <p>Are you sure you want to book the session?</p>
      <button onClick={() => handleClick("no")}>No</button>
      <button onClick={() => handleClick("yes")}>Yes</button>
    </div>
  );
}
