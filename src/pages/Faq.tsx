import React, { useState } from "react";

const faqs = [
  {
    question: "What is CO-ShApee Up for Change?",
    answer:
      "CO-ShApee Up for Change is a fundraising and environmental event that promotes environmental awareness and sustainability. Through this event, we:\n\n- Sell Lasallian merchandise and apparel (T-shirts, lanyards, caps, tote bags, and pins).\n- Encourage plastic bottle donations in exchange for plants.\n- In support for Filinvest’s Project Green to recycle collected plastic bottles and support sustainability.",
  },
  {
    question: "What are the T-shirt sizes?",
    answer: (
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-400 text-center">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-400 px-4 py-2">Size</th>
              <th className="border border-gray-400 px-4 py-2">
                Width (inches)
              </th>
              <th className="border border-gray-400 px-4 py-2">
                Length (inches)
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              ["XS", "17", "24"],
              ["S", "18", "25"],
              ["M", "19", "26"],
              ["L", "20", "27"],
              ["XL", "21", "28"],
              ["2XL", "22", "29"],
              ["3XL", "23", "30"],
              ["5XL", "25", "32"],
            ].map(([size, width, length], index) => (
              <tr key={size} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                <td className="border border-gray-400 px-4 py-2">{size}</td>
                <td className="border border-gray-400 px-4 py-2">{width}</td>
                <td className="border border-gray-400 px-4 py-2">{length}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
  },
  {
    question: "How can I order merchandise?",
    answer: (
      <div>
        <p className="mb-2">
          Orders will be placed via a Microsoft Form. This website is for
          showcasing merchandise only.
        </p>
        <p>
          The official order form is available{" "}
          <a
            href="https://forms.office.com/pages/responsepage.aspx?id=aF0ZCJABuEeDRLFy8jzpxdBi7_VLDe5ImaKwddTM8RlUMEhSOUs2QTlWNUwyV1M5WE4zS0ZLVFpXMC4u&route=shorturl&fbclid=IwY2xjawJUSkBleHRuA2FlbQIxMAABHQk88qGeoF9rdZtO5tACERyhUerDm91anSpkIhpoueOy8_hd9U40PRRDDg_aem_sVFQMmpKcyfPQ1okjuB-MQ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            here
          </a>
          .
        </p>
      </div>
    ),
  },
  {
    question: "When and where can I claim my orders?",
    answer:
      "Pre-ordered merchandise can be claimed on:\n\n📅 April 8, 10-11, 2025\n⏰ 10:00 AM – 5:00 PM\n📍 JFH Kubo, DLSU-D",
  },
  {
    question: "Is shipping available?",
    answer:
      "❌ No. Orders are for onsite claiming only at JFH Kubo, DLSU-D during the specified dates.",
  },
  {
    question: "How do I participate in the plastic bottle donation?",
    answer:
      "- **Collect & Clean** – Gather 10 clean, empty plastic bottles (any size).\n- **Drop Off** – Bring them to JFH Kubo during collection periods.\n- **Claim Your Plant** – Receive 1 plant in exchange for every 10 bottles donated.\n- **Choose** – You can either take the plant home or donate it to the university (Campus Sustainability Office).\n- **Repeat** – You may donate any number of bottles (must be in multiples of 10).",
  },
  {
    question: "When and where can I drop off my plastic bottles?",
    answer: "📅 March 31 - April 4, 2025\n⏰ 10:00 AM – 5:00 PM\n📍 JFH Kubo",
  },
  {
    question: "When will plants be distributed to donors?",
    answer: "📅 April 8, 10-11, 2025\n⏰ 10:00 AM – 5:00 PM\n📍 JFH Kubo",
  },
];

const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const formatAnswer = (text: string) => {
    return text.split("\n\n").map((paragraph, pIndex) => {
      if (paragraph.startsWith("-")) {
        const listItems = paragraph
          .split("\n")
          .filter((line) => line.startsWith("-"));
        return (
          <ul key={pIndex} className="list-disc pl-6 mb-2">
            {listItems.map((item, iIndex) => {
              const content = item.replace(/^- /, "");
              const parts = content.split(/(\*\*.*?\*\*)/g);
              return (
                <li key={iIndex} className="mb-1">
                  {parts.map((part, partIndex) =>
                    part.startsWith("**") && part.endsWith("**") ? (
                      <strong key={partIndex} className="text-[#2c5c2e]">
                        {part.slice(2, -2)}
                      </strong>
                    ) : (
                      part
                    )
                  )}
                </li>
              );
            })}
          </ul>
        );
      }

      return (
        <div key={pIndex} className="mb-2">
          {paragraph.split("\n").map((line, lineIndex, lines) => {
            const parts = line.split(/(\*\*.*?\*\*)/g);
            return (
              <React.Fragment key={lineIndex}>
                {parts.map((part, partIndex) =>
                  part.startsWith("**") && part.endsWith("**") ? (
                    <strong key={partIndex} className="text-[#2c5c2e]">
                      {part.slice(2, -2)}
                    </strong>
                  ) : (
                    part
                  )
                )}
                {lineIndex !== lines.length - 1 && <br />}
              </React.Fragment>
            );
          })}
        </div>
      );
    });
  };

  return (
    <div className="bg-[#f5f2e6] min-h-screen px-4 py-6 md:p-8 lg:px-16 mt-16">
      <h1 className="text-2xl font-bold text-center md:text-3xl lg:text-4xl mb-6">
        Frequently Asked Questions
      </h1>

      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4 border-b border-gray-300">
            <button
              className="w-full text-left py-3 px-4 text-lg font-semibold flex justify-between items-center bg-white hover:bg-gray-100 rounded-lg"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span>{openIndex === index ? "▲" : "▼"}</span>
            </button>
            {openIndex === index && (
              <div className="px-4 py-2 bg-gray-50 rounded-b-lg">
                {typeof faq.answer === "string"
                  ? formatAnswer(faq.answer)
                  : faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqPage;
