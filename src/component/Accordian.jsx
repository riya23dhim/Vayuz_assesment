import { useState } from 'react';
//for all accordians
import { VscAdd } from "react-icons/vsc";
import { RxCross1 } from "react-icons/rx";
const Accordion = ({ title, children }) => {
    //state to check its open or close
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div className=" px-2 py-3">
      {/* Header */}
      <button
        className="w-full flex justify-between items-center text-left font-medium text-3xl"
        onClick={toggleAccordion}
      >
        <span className='text-[27px] text-gray-300 font-extralight tracking-wider font-playfair'>{title}</span>
        <span className="text-2xl hover:scale-[1.01] p-1 px-1  rounded-full hover:bg-dark-hover cursor-pointer font-semibold">{isOpen ? <RxCross1 className='text-xl' /> : <VscAdd />}</span>
      </button>

      {/* Content shown on open */}
      {isOpen && (
        <div className="mt-2 p-2 pr-4 text-sm text-gray-500">
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
