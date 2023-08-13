import { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";

function Accordion({ items }) {
  const [expanded, setExpanded] = useState(-1);
  const handleClick = (index) => {
    setExpanded((currentExpanded) => (index === currentExpanded ? -1 : index));
  };
  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expanded;
    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );
    return (
      <div key={item.label}>
        <div
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => handleClick(index)}>
          {item.label}
          {icon}
        </div>
        {expanded === index && (
          <div className="border-b p-5">{item.content}</div>
        )}
      </div>
    );
  });
  return <div className="border-x border-t rounded">{renderedItems}</div>;
}

export default Accordion;
