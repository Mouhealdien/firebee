import { useState } from "react";
const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "Is Firebee Safe?",
      answer:
        "Yes, Firebee is safe. Firebee meets the safety standards set by ICNIRP (International Commission on Non-Ionizing Radiation Protection). Firebee is 3000x less powerful than your average smartphone. Firebee uses an ultra-low signal that is completely safe for home use. The technology behind Firebee has been rigorously safety tested and has over 300,000 hours tested by users for efficacy and safety. ",
    },
    {
      question: "How Does Firebee work?",
      answer:
        "Firebee uses safe ultra-low energy magnetic signals to gently nudge you into a different mental state. Every Firebee signal is made by studying real world magnetic signatures. Did you know caffeine has a unique one of a kind magnetic signature? It’s a relatively unknown fact that every molecule on earth actually has a unique magnetic signature.Firebee using patented technology is able to take a magnetic signature and play it back through the Firebee headband. When you use the alert signal with Firebee you are actually playing back the magnetic signature of caffeine which our bodies already recognize. Within minutes of feeling the ultra-low magnetic signal of caffeine our body begins to feel more alert and awake. Firebee signal is 3000 times less powerful than a smartphone and completely safe to use. ",
    },
    {
      question: "Will Firebee Fit on My Head?",
      answer:
        "Firebee has a fully adjustable headband you can adjust to fit comfortably and snug on your head.",
    },
    {
      question: "What If I want the signal to stop?",
      answer:
        "Firebee is designed to be used on command. If you wish to turn off a signal, the effects wear off within minutes.",
    },
    {
      question: "How do you charge Firebee?",
      answer:
        "Firebee comes with a charging dock and a charging cable. Just set up the charging dock on a nightstand and plug it in. ",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-zinc-300 mb-2">
          <button
            className="flex justify-between w-full text-left py-2 focus:outline-none"
            onClick={() => toggleAccordion(index)}
          >
            <span className="text-lg font-medium">{faq.question}</span>
            <span className="text-xl">{activeIndex === index ? "-" : "+"}</span>
          </button>
          {activeIndex === index && (
            <div className="mt-2 text-zinc-700">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
