import React from "react";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaLink } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-4xl text-center">
        <h2 className="sm:text-4xl text-2xl font-extrabold mb-10">
          تواصل معنا -{" "}
          <span className="text-orange-600">اعرف قسمك كلية اداب عين شمس</span>
        </h2>

        <div className="space-y-10 text-right text-lg sm:text-xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <span className="text-gray-700 font-semibold">رقم التواصل:</span>
            <div className="flex items-center gap-6 text-green-600">
              <a
                href="https://wa.me/201065234170"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-700"
              >
                <FaWhatsapp size={30} />
              </a>
              <a>
                <FaPhoneAlt size={26} />
              </a>
              <span className="text-gray-800 text-xl font-medium">
                01065234170
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <span className="text-gray-700 font-semibold">
              البريد الإلكتروني:
            </span>
            <div className="flex items-center gap-4 text-blue-600">
              <FaEnvelope size={26} />
              <span className="text-gray-800 text-xl font-medium">
                adabnawyb@gmail.com
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <span className="text-gray-700 font-semibold">روابط إضافية:</span>
            <div className="flex items-center gap-4 text-gray-600">
              {/* <FaLink size={20} /> */}
              <a
                href="https://www.facebook.com/share/18uhcySfQq/"
                target="_blank"
                className="text-blue-600 underline text-sm"
              >
                https://www.facebook.com/share/18uhcySfQq/
              </a>
            </div>
          </div>
        </div>

        <p className="text-lg text-gray-600 mt-12 font-medium">
          نحن هنا للإجابة على جميع استفساراتكم بكل سرور 💬
        </p>
      </div>
    </div>
  );
};

export default Contact;
