import { useState } from 'react';
import { ChevronDown, ChevronUp, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What services do you offer?',
      answer: 'We offer web design, development, SEO optimization, and UI/UX consulting services tailored to your business needs.',
    },
    {
      question: 'Do you provide revisions?',
      answer: 'Yes! We offer multiple rounds of revisions to ensure your complete satisfaction with the final product.',
    },
    {
      question: 'How do I start working with you?',
      answer: 'Simply get in touch via our contact form or email. We’ll set up a call to understand your needs and start planning your project.',
    },
    {
      question: 'What is your pricing structure?',
      answer: 'Our pricing is flexible depending on the project scope. We offer fixed packages as well as custom quotes.',
    },
    {
      question: 'How long does a project take?',
      answer: 'Most projects are completed in 2-6 weeks, depending on complexity and client responsiveness.',
    },
  ];

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-4 text-gray-700">
          Questions<span className="">?</span> Answers<span className="">!</span>
        </h2>
        <p className="text-lg text-gray-700 mb-12">
          Find quick answers to the most common questions about the services offered
        </p>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left card */}
          <div className="bg-white shadow-xl rounded-2xl p-8 text-center flex flex-col items-center justify-center gap-4 w-full lg:max-w-sm">
            <div className="bg-gray-100 p-4 rounded-full shadow-md">
              <span className="text-2xl">❓</span>
            </div>
            <h3 className="text-2xl font-semibold">Get In Touch Now!</h3>
            <p className="text-gray-600">
              Still have questions? Feel free to get in touch with us today!
            </p>
            <Link to='/Contact' className="bg-[#222E4C] text-white px-6 py-3 rounded-xl shadow-lg flex items-center gap-2  transition">
              <Send className="w-5 h-5" />
              Ask A Question
            </Link>
          </div>

          {/* FAQ accordion */}
          <div className="flex-1 space-y-4 text-left">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md"
              >
                <div
                  className="px-6 py-4 flex justify-between items-center cursor-pointer"
                  onClick={() => toggle(i)}
                >
                  <span className="text-lg font-medium text-gray-800">{faq.question}</span>
                  {openIndex === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
                {openIndex === i && (
                  <div className="px-6 pb-4 text-gray-700 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
