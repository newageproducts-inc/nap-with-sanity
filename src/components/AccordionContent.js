import React from "react";
import AccordionMain from "./AccordionMain";

function AccordionContent() {
  const contents = [
    {
      question: "Accordion 1",
      answer:
        " Lorem Ipsum is simply dummy text of the printing and typesetting  Lorem Ipsum is simply dummy text of the printing and typesetting"
    },
    {
      question: "Accordion 2",
      answer:
        " Lorem Ipsum is simply dummy text of the printing and typesetting"
    }
  ];

  return (
    <div>
      <AccordionMain />
    </div>
    // <div>
    //   {contents.map(contents => (
    //     <AccordionMain question={contents.question} answer={contents.answer} />
    //   ))}
    // </div>
  );
}

export default AccordionContent;
