import React, { useState } from "react";
import { sections } from "../assets/section";

const SomeSections = () => {
  const [selectedSection, setSelectedSection] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleCardClick = (section) => {
    setSelectedSection(section);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedSection(null);
  };
  return (
    <div>
      <h1 className="text-4xl font-bold text-orange-600/75 text-center">
        بعض الاقسام
      </h1>
      <p className="text-gray-400 text-center">
        بعض اقسام كلية الاداب للطلاب الجامعيين
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 px-5">
        {sections.slice(0, 4).map((section, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition cursor-pointer"
            onClick={() => handleCardClick(section)}
          >
            <img src={section.image} className="w-full object-cover" />
            <h2 className="text-lg font-semibold p-3">{section.name}</h2>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isOpen && selectedSection && (
        <div
          className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 px-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 relative shadow-xl"
            onClick={(e) => e.stopPropagation()} // يمنع إغلاق المودال لما ندوس جواه
          >
            <button
              onClick={closeModal}
              className="absolute top-3 left-3 text-gray-500 hover:text-red-500 text-2xl font-bold z-50"
            >
              &times;
            </button>

            <img
              src={selectedSection.image}
              className="w-full object-cover rounded-md mb-4"
            />

            <h2 className="text-2xl font-bold text-orange-600 mb-3 text-center">
              {selectedSection.name}
            </h2>

            <div
              className="text-gray-700 leading-relaxed text-center font-semibold"
              style={{ lineHeight: "3" }}
            >
              <p>{selectedSection.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SomeSections;
