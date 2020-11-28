import React from 'react'
import Accordion from './Accordion'

function AccordionContent() {

    const contents =[
        {
            question: "Accordion 1",
            answer: " Lorem Ipsum is simply dummy text of the printing and typesetting  Lorem Ipsum is simply dummy text of the printing and typesetting",
        },
        {
            question: "Accordion 2",
            answer: " Lorem Ipsum is simply dmmy text of the printing and typesetting",
        },
        {
            question: "Accordion 3",
            answer: " Lorem Ipsum is simply dummy text of the printing and typesetting  Lorem Ipsum is simply dummy text of the printing and typesetting",
        }
    ]

    return (
        <div>
            {contents.map(contents => (
                <Accordion 
                    question = {contents.question}
                    answer = {contents.answer}
                     />

            ))}
        </div>
    )
}

export default AccordionContent
