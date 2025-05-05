import React from "react";
import { persons } from "../assets/persons";
import {
  FaBriefcase,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaUser,
} from "react-icons/fa";

const ContactWithPersons = () => {
  return (
    <div className="mt-20 px-4">
      <h1 className="text-4xl font-bold text-orange-600/75 text-center">
        تواصل مع الاشخاص
      </h1>
      <p className="text-gray-400 text-center mb-10">
        تواصل مع الاشخاص في الاقسام المختلفة
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {persons.map((person, index) => (
          <div
            key={index}
            className="w-72 bg-white shadow-xl rounded-xl overflow-hidden border border-gray-200"
          >
            {/* الصورة الرئيسية */}
            <img src={person.image} alt={person.name} className="w-80 h-80" />

            {/* الأزرار */}
            <div className="flex flex-wrap items-center p-3 bg-white gap-2">
              <button className="bg-blue-400 text-white px-4 py-2 rounded-xl flex items-center justify-center gap-2 w-full">
                <FaPhone /> {person.phone}
              </button>

              <div className="w-full">
                {person.email.includes("facebook") ||
                person.email.includes("instagram") ? (
                  <a
                    href={person.email}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-400 text-white px-4 py-2 rounded-xl flex items-center justify-center gap-2 w-full overflow-auto whitespace-nowrap"
                  >
                    <FaEnvelope /> {person.email}
                  </a>
                ) : (
                  <div className="bg-blue-400 text-white px-4 py-2 rounded-xl flex items-center justify-center gap-2 w-full text-center">
                    <FaEnvelope /> {person.email}
                  </div>
                )}
              </div>
            </div>

            {/* المعلومات داخل مربعات زرقاء */}
            <div className="space-y-1 p-2">
              <div className="bg-blue-400 text-white rounded-t-3xl py-2 px-3 flex gap-4 items-center">
                <FaUser />
                <span className="font-bold text-center">{person.name}</span>
              </div>

              <div className="bg-blue-400 text-white rounded py-2 px-3 flex gap-4 items-center">
                <FaMapMarkerAlt />
                <span className="text-center">{person.location}</span>
              </div>

              <div className="bg-blue-400 text-white rounded-b-3xl py-2 px-3 flex items-start gap-2 text-sm">
                <FaBriefcase className="mt-1" />
                <div>
                  <strong className="text-xl">الاختصاص:</strong>{" "}
                  {person.specialty}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactWithPersons;
