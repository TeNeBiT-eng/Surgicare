import React from "react";
import "./faqdata.css";

function FAQDATA({faq, index, toggleFAQ}) {
  return (
    <div
      className={"faq " + (faq.open ? "open" : "")}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question">
        {faq.question}
      </div>

      <div className="faq-answer">
        {faq.answer}
      </div>
    </div>
  );
}

export default FAQDATA;
