import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const About: React.FC = () => {
  return (
    <div className="bg-[#f5f2e6] min-h-screen flex flex-col items-center px-6 py-12 mt-16">
      {/* Hero Section */}
      <div className="max-w-5xl text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black font-lora">
          Circle of Student Assistants (CoSA)
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mt-4">
          A recognized student organization under the Council of Student
          Organizations (CSO), exclusively for financial aid scholars and
          student assistants.
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl text-justify bg-white shadow-lg rounded-2xl p-6 md:p-8 mt-8">
        <p className="text-md md:text-lg text-gray-800">
          The Circle of Student Assistants (CoSA) is a recognized student
          organization under the Council of Student Organizations (CSO). The
          organization is exclusive to financial aid scholars or student
          assistants. It is cognizant of all student assistants as part and
          parcel of this institution and as individuals that are upholding
          dignity, serving truthfully, and developing professionally.
        </p>

        <p className="text-md md:text-lg text-gray-800 mt-4">
          Moreover, it also aims to be beneficial to the academic community in
          promoting an indolence-free environment, in encouraging more student
          scholars to uplift their educational standards, in maintaining harmony
          and unity among fellow student assistants and the members of the
          Lasallian community, and in creating external linkages and outreach
          programs.
        </p>
      </div>

      {/* Call-to-Action */}
      <div className="mt-8 flex justify-center space-x-6">
        <a
          href="https://www.facebook.com/cosadlsud"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 text-3xl hover:text-blue-800 transition"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/dlsud_cosa/?igsh=bmo2cGdmaG9jbW8x#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-600 text-3xl hover:text-pink-800 transition"
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default About;
