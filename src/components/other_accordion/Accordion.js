import React, { useState } from "react";

function Accordion({question, answer}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion">
      <div onClick={() => setIsOpen(!isOpen)} className="accordion_header">
        <h2>{question}</h2>
        <div className="accordion_indicator">
            {isOpen ? '-' : '+'}
        </div>
      </div>

    {isOpen && (

      <div className="accordion_body">
       {answer}
      </div>
      )}
    </div>
  );
}

export default Accordion;
