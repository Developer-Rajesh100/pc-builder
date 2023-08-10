import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border rounded-md shadow-sm">
      <div
        className="flex items-center justify-between p-4 cursor-pointer"
        onClick={toggleAccordion}
      >
        <h3 className="text-lg font-semibold">{title}</h3>
        <span
          className={
            isOpen
              ? "transform rotate-180 transition duration-700 ease-in-out"
              : "transition duration-700 ease-in-out"
          }
        >
          <FaArrowDown />
        </span>
      </div>
      {isOpen && <div className="p-4">{content}</div>}
    </div>
  );
};

export default Accordion;
