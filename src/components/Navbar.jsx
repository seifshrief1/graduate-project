import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import gsap from "gsap";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP Animation for Navbar
  useEffect(() => {
    gsap.to(".navbar", {
      backgroundColor: isScrolled ? "transparent" : "white",
      boxShadow: isScrolled
        ? "0px 4px 10px rgba(0, 0, 0, 0.1)"
        : "0px 2px 5px rgba(0, 0, 0, 0.05)",
      duration: 0.5,
      // width: isScrolled ? "80%" : "100%",
      ease: "power2.out",
    });
  }, [isScrolled]);

  return (
    <nav className="navbar fixed top-4 sm:top-0 left-1/2 transform -translate-x-1/2 w-[80%] md:w-full lg:w-full sm:rounded-none rounded-2xl shadow-lg backdrop-blur-lg transition-all duration-100 z-50">
      <div className="flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/" className="sm:text-xl font-bold text-orange-600">
          اعرف قسمك كلية اداب عين شمس
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-orange-600 text-2xl md:hidden"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`md:flex gap-6 items-center font-medium ${
            isOpen
              ? "absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-4 rounded-2xl"
              : "hidden xl:flex"
          }`}
        >
          {" "}
          <li>
            <Link
              to="/"
              className="hover:text-orange-600 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              الرئيسية
            </Link>
          </li>
          <li>
            <Link
              to="/knowYourSection"
              className="hover:text-orange-600 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              اعرف قسمك
            </Link>
          </li>
          <li>
            <Link
              to="/sections"
              className="hover:text-orange-600 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              الاقسام
            </Link>
          </li>
          <li>
            <Link
              to="/contactlinks"
              className="hover:text-orange-600 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              روابط التواصل
            </Link>
          </li>
          <li>
            <Link
              to="/contactWithPersons"
              className="hover:text-orange-600 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              التواصل مع الاشخاص
            </Link>
          </li>
          <li>
            <Link
              to="/conditions"
              className="hover:text-orange-600 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              شروط القبول
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-orange-600 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              تواصل معنا
            </Link>
          </li>
          <li className="mt-1">
            <SignedOut>
              <SignInButton mode="modal" asChild>
                <button className="px-4 py-1.5 bg-orange-600 text-white rounded-full cursor-pointer hover:bg-orange-700 transition">
                  تسجيل الدخول
                </button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <UserButton />
            </SignedIn>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
