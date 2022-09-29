import React, { useState } from "react";
import "./faq.css";
import FAQDATA from "./FAQDATA";

const Faq = () => {
  const [faqs, setFaqs] = useState([
    // {
    //   question: "How do i locate the hospital ? ",
    //   answer: "",
    //   open: true,
    // },

    // {
    //   question: "How can i contact my physician ? ",
    //   answer: "",
    // },

    {
      question: "What is the duration of most surgeries major & minor ?",
      answer:
        "It depends on the type of surgery. Major surgeries can take up to 6 hours, Minor surgeries can be less than 30 minutes",
      open: false,
    },

    {
      question: "Does the hospital take in referral cases from other hospitals ?",
      answer: "Yes",
      open: false,
    },

    {
      question: "List of all the surgeries done at Surgicare Consult Hospital",
      answer: "",
      open: false,
    },
    // {
    //   question: "What is the mission & vision of Surgicare Consult Hospital ? ",
    //   answer: "",
    // },
    {
      question: "Can i postpone my appointment ?",
      answer: "Yes",
      open: false,
    },

    {
      question: "Does the hospital refund cash or cheque ?",
      answer: "It depends on how the money was paid, usually by bank transfer",
      open: false,
    },
    {
      question: "Can i recieve prescription for medication on the Surgicare Consult Hospital website ?",
      answer: "No, we don't prescribe drugs from distance",
      open: false,
    },

    {
      question: "Can i pay my bills at Surgicare Consult Hospital installmentally ? ",
      answer: "Yes, If it is an emergency",
      open: false,
    },

    {
      question: "What method of payment is accepted at Surgicare Consult Hospital ?",
      answer: "Bank transfer, POS and cash",
      open: false,
    },

    {
      question: "What is the visiting policy at Surgicare Consult Hospital ?",
      answer:
        "Visitors can come visiting, but if we want to attend to the patient, visitors have to leave. If it is a new born baby, there are no visits",
      open: false,
    },

    {
      question: "Does Surgicare Consult Hospital hire part-time personnel ?",
      answer: "Yes",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <>
      <section className="faq-section">
        <h1 className="h1_faq">Frequently Answered Questions</h1>
        <div className="faq-container">
          <div className="faqs">
            {faqs.map((faq, i) => (
              <FAQDATA faq={faq} index={i} toggleFAQ={toggleFAQ}/>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
