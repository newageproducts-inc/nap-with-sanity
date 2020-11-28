import React, { useState } from "react";
import { useContext } from "react";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";
import AccordionContext from "react-bootstrap/AccordionContext";

function ContextAwareToggle({ children, eventKey, callback }) {
  const currentEventKey = useContext(AccordionContext);

  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = currentEventKey === eventKey;
  return (
    <button
      type="button"
      style={{ backgroundColor: isCurrentEventKey ? "pink" : "lavender" }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}
const contents = [
  {
    question: "Accordion 1",
    answer:
      " Lorem Ipsum is simply dummy text of the printing and typesetting  Lorem Ipsum is simply dummy text of the printing and typesetting"
  },
  {
    question: "Accordion 2",
    answer: " Lorem Ipsum is simply dummy text of the printing and typesetting"
  }
];

function AccordionMain({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="page-section">
      {contents.map(contents => {
        const { question, answer } = contents;
        return (
            <Accordion defaultActiveKey="0">
              <Card>
                <Card.Header>
                  <ContextAwareToggle eventKey="0">
                    {question}
                  </ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>{answer}</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
        );
      })}
    </div>

    // <div className="accordion">
    //   <div onClick={() => setIsOpen(!isOpen)} className="accordion_header">
    //     <h2>{question}</h2>
    //     <div className="accordion_indicator">{isOpen ? "-" : "+"}</div>
    //   </div>

    //   {isOpen && <div className="accordion_body">{answer}</div>}
    // </div>
  );
}

export default AccordionMain;
