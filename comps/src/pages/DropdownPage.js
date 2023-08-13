import React, { useState } from "react";
import Dropdown from "../components/Dropdown";

function DropdownPage() {
  const [selected, setSelected] = useState(null);
  const handleSelect = (option) => {
    setSelected(option);
  };
  const options = [
    { label: "red like apple", value: "red" },
    { label: "orange like orange", value: "orange" },
    { label: "yellow like banana", value: "yellow" },
  ];

  return (
    <div>
      <Dropdown options={options} value={selected} onChange={handleSelect} />
    </div>
  );
}

export default DropdownPage;
