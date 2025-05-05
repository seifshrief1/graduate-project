import React from "react";
import { FaFacebook, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { sections } from "../assets/section";

const ContactLinks = () => {
  return (
    <div className="mt-20">
      <h1 className="text-center text-3xl font-bold text-orange-500">
        كلية الاداب
      </h1>
      <div className="flex flex-wrap justify-center sm:gap-10 gap-2 items-center mt-5">
        <p className="flex gap-2 items-center">
          <span className="text-blue-500 text-2xl">
            <FaFacebook />
          </span>
          <a
            className="text-blue-500 underline"
            href="https://www.facebook.com/share/16DvF4byps/"
            target="_blank"
          >
            https://www.facebook.com/share/16DvF4byps/
          </a>
        </p>
        <p className="flex gap-2 items-center">
          <span className="text-orange-500 text-2xl">
            <CgWebsite />
          </span>
          <a
            className="text-blue-500 underline"
            href="https://arts.asu.edu.eg/ar/"
            target="_blank"
          >
            https://arts.asu.edu.eg/ar/
          </a>
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 mt-8 px-5">
        {sections.map((section, index) => (
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <img src={section.image} className="w-full object-cover" />
            <h2 className="text-lg font-semibold p-3">{section.name}</h2>
            <p className="text-center mb-2 text-lg">للتواصل</p>
            <hr className="border-gray-300" />
            <div className="p-2">
              <div className="flex flex-col items-center">
                <p className="mb-1 text-sm font-bold">
                  الموقع الرسمي للقسم علي Facebook
                </p>
                <p className="flex gap-2 items-center">
                  <span className="text-blue-500 text-xl">
                    <FaFacebook />
                  </span>
                  <a
                    className="text-blue-500 underline sm:text-sm text-xs"
                    href={section.facebook}
                    target="_blank"
                  >
                    {section.facebook}
                  </a>
                </p>
              </div>
              <hr className="border-gray-300 my-4" />
              <div className="flex flex-col items-center">
                <p className="mb-1 text-sm font-bold">
                  المواقع الخاصه بطلاب القسم Facebook.
                </p>
                {section.facebookStudents &&
                  section.facebookStudents.map((link, i) => (
                    <p key={i} className="flex gap-2 items-center mb-4">
                      <span className="text-blue-500 text-xl">
                        <FaFacebook />
                      </span>
                      <a
                        className="text-blue-500 underline sm:text-sm text-xs"
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link}
                      </a>
                    </p>
                  ))}
              </div>
              <hr className="border-gray-300 my-4" />
              <div className="flex flex-col items-center">
                <p className="mb-1 text-sm font-bold">
                  مجموعات الطلاب (WhatsApp)
                </p>
                {section.whatsAppStudents &&
                  section.whatsAppStudents.map((link, i) => (
                    <p key={i} className="flex gap-2 items-center mb-4">
                      <span className="text-green-500 text-xl">
                        <FaWhatsapp />
                      </span>
                      <a
                        className="text-blue-500 underline sm:text-sm text-xs"
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link}
                      </a>
                    </p>
                  ))}
              </div>
              {section.telegramStudents && (
                <>
                  <hr className="border-gray-300 my-4" />
                  <div className="flex flex-col items-center">
                    <p className="mb-1 text-sm font-bold">
                      مجموعات الطلاب (Telegram)
                    </p>
                    {section.telegramStudents &&
                      section.telegramStudents.map((link, i) => (
                        <p key={i} className="flex gap-2 items-center mb-4">
                          <span className="text-blue-500 text-xl">
                            <FaTelegram />
                          </span>
                          <a
                            className="text-blue-500 underline sm:text-sm text-xs"
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {link}
                          </a>
                        </p>
                      ))}
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactLinks;
