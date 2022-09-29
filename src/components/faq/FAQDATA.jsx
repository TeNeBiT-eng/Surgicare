import React from "react";
import "./faqdata.css";

function FAQDATA({faq, index, toggleFAQ}) {
  return (
    <div
      className={"faq" + (faq.open ? "open" : "")}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question">{faq.question}</div>

      <div className="faq-answer">{faq.answer}</div>
    </div>
  );
}

export default FAQDATA;

// const Faqs = [
//     {
//       questionText: "How do i locate the hospital ? ",
//       answerText: "",
//     },

//     // {
//     //   questionText: "How can i contact my physician ? ",
//     //   answerText: "",
//     // },

//     {
//       questionText: "What is the duration of most surgeries major & minor ",
//       answerText: "It depends on the type of surgery. Major surgeries can take up to 6 hours, Minor surgeries can be less than 30 minutes",
//     },

//     {
//       questionText: "Does the hospital take in referral cases from other hospitals ? ",
//       answerText: "Yes",
//     },

//     {
//       questionText: "List of all the surgeries done at Surgicare Consult Hospital  ",
//       answerText: "",
//     },
//     // {
//     //   questionText: "What is the mission & vision of Surgicare Consult Hospital ? ",
//     //   answerText: "",
//     // },
//     {
//       questionText: "Can i postpone my appointment ? ",
//       answerText: "Yes",
//     },

//     {
//       questionText: "Does the hospital refund cash or cheque ? ",
//       answerText: "It depends on how the money was paid, usually by bank transfer",
//     },
//     {
//       questionText: "Can i recieve prescription for medication on the Surgicare Consult Hospital website ? ",
//       answerText: "No, we don't prescribe drugs from distance",
//     },

//     {
//       questionText: "Can i pay my bills at Surgicare Consult Hospital installmentally ? ",
//       answerText: "Yes, If it is an emergency",
//     },

//     {
//       questionText: "What method of payment is accepted at Surgicare Consult Hospital  ? ",
//       answerText: "Bank transfer, POS and cash",
//     },

//     {
//       questionText: "What is the visiting policy at Surgicare Consult Hospital  ? ",
//       answerText: "Visitors can come visiting, but if we want to attend to the patient, visitors have to leave. If it is a new born baby, there are no visits",
//     },

//     {
//       questionText: "Does Surgicare Consult Hospital hire part- time personnel ? ",
//       answerText: "Yes",
//     }
//   ];
